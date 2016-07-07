<template>
  <div
    class="toast toast-gritcode {{activeToast ? 'active' : ''}} {{position}} {{toastContext}} {{hideProgress ? '' : 'has-progress'}}"
    v-on:mouseover="pause" v-on:mouseout="animate">
    <div v-html="message"></div>
    <div class="action">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="clear">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-bind:class="{'progress-bar': true, active: activeProgressBar}" v-bind:style="style"
         v-show="!hideProgress"></div>
  </div>
</template>
<style>
  .toast-gritcode {
    display: table;
    position: fixed;
    min-height: 48px;
    min-width: 288px;
    max-width: 600px;
    padding: 16px 24px 16px 24px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 2px;
    left: 0;
    bottom: 0;
    margin: 12px;
    font-size: 14px;
    cursor: default;
    -webkit-transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    transition: visibility 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    transition: visibility 0.3s, transform 0.3s, opacity 0.3s;
    transition: visibility 0.3s, transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    -ms-transform: translateY(100px);
    z-index: 9999;
  }

  .toast-gritcode.active {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  .toast-gritcode.top {
    top: 0;
    bottom: auto;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    -ms-transform: translateY(-100px);
  }

  .toast-gritcode.top.active {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  .toast-gritcode.right {
    left: auto;
    right: 0;
  }

  .toast-gritcode .progress-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.4em;
    background: rgba(255, 255, 255, 0.3);
    width: 0;
    -webkit-transition: width 3s;
    transition: width 3s;
  }

  .toast-gritcode .progress-bar.active {
    width: 100%;
  }

  .toast-gritcode .message, .toast-gritcode .action {
    vertical-align: middle;
    display: table-cell;
  }

  .toast-gritcode .action {
    text-align: right;
  }

  .toast-gritcode {
    background-color: #818a91;
    color: #fff;
  }

  .toast-gritcode.toast-info {
    background-color: #5bc0de;
    color: #fff;
  }

  .toast-gritcode.toast-success {
    background-color: #42b983;
    color: #fff;
  }

  .toast-gritcode.toast-warning {
    background-color: #f0ad4e;
    color: #fff;
  }

  .toast-gritcode.toast-danger {
    background-color: #d9534f;
    color: #fff;
  }

  .toast-gritcode.toast-dark {
    background-color: #000;
    color: #fff;
  }

  .toast-gritcode.toast-light {
    background-color: #fff;
    color: #000;
  }


</style>
<script>
  // this delays trigger of the first toast (queue)
  const DEBOUNCE = 300 // in ms

  // hide toast after default duration
  const DURATION = 3000 // in ms

  // this transition time is set in scss and defines how long it takes to animate in/out the toast element
  const TOAST_ANIMATION = 300 // in ms

  export default {
    replace: true,
    computed: {
      toastContext () {
        return !this.context ? '' : 'toast-' + this.context
      }
    },
    data () {
      return {
        activeToast: false,
        activeProgressBar: false,
        animation: null,
        animationInProgress: false,
        queue: [],
        style: {
          transition: 'width 0s'
        }
      }
    },
    props: {
      context: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: DURATION
      },
      message: {
        type: String,
        default: 'Done!'
      },
      onAjaxErrors: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top left'
      },
      hideProgress: {
        type: Boolean,
        default: true
      },
      debounce: {
        type: Number,
        default: DEBOUNCE
      }
    },
    methods: {
      pause () {
        this.activeProgressBar = false
        clearTimeout(this.animation)
        this.style.transition = 'width 0.1s'
      },
      clear () {
        this._toastAnimation = setTimeout(() => {
          this.activeProgressBar = false
          this.animationInProgress = false
          this.style.transition = 'width 0s'
          this.activeToast = false
          clearTimeout(this.animation)
          // show next toast from the queue
          if (this.queue.length > 0) {
            this._toastAnimation = setTimeout(() => {
              const toast = this.queue.shift()
              this.show(toast)
            }, 0) // this set to 0 instead of TOAST_ANIMATION in purpose, so queued messages pop a little bit quicker, so user can close them off quickly
          }
        }, TOAST_ANIMATION) // we need to wait till toast is gone off the screen to clear it and then call next toast
      },
      animate () {
        this.style.transition = 'width ' + this.duration / 1000 + 's'
        this.activeProgressBar = true
        this.animation = setTimeout(this.clear, this.duration)
      },
      show (options) {
        this.context = 'default'
        this.animationInProgress = true
        this.message = options.message || 'Done!'
        this.context = options.context || ''
        this.debounce = options.debounce || DEBOUNCE
        this.duration = options.duration || DURATION
        this.hideProgress = options.hideProgress || true
        this.position = options.position || 'top left'
        if (options.success) {
          this.context = 'success'
          this.message = options.success
        }
        if (options.info) {
          this.context = 'info'
          this.message = options.info
        }
        if (options.warning) {
          this.context = 'warning'
          this.message = options.warning
        }
        if (options.error) {
          this.context = 'danger'
          this.message = options.error
        }
        // wait for dom element (so that position class can take effect when triggered via event)
        setTimeout(() => {
          this.activeToast = true
          this.animate()
        }, 100)
      },
      addToQueue (options) {
        if (this.animationInProgress || this.queue.length > 0) {
          // if some other toast is currently animating, add it to the queue
          this.queue.push(options)
        } else {
          // if first toast, show it
          setTimeout(() => { this.show(options) }, this.debounce)
        }
      }
    },
    events: {
      'end::ajax': function (options) {
        if (this.onAjaxErrors && options && options.error) {
          this.addToQueue(options)
        }
      },
      'show::toast': function (options) {
        this.addToQueue(options)
      }
    },
    destroyed () {
      clearTimeout(this._animation)
      clearTimeout(this._toastAnimation)
    }
  }
</script>
