<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal-body">
            <slot name="body"> </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-not-yet-button" @click="$emit('go')">
                Go To Music🎧
              </button>
              <button class="modal-not-yet-button" @click="$emit('close')">
                Not Yet
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Dancing Script", cursive;
}
.modal-footer {
  font-family: sans-serif;
}
.modal-header {
  align-items: center;
  justify-content: center;
}
.modal-header h3 {
  margin-top: 0;
  color: #505352;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-not-yet-button {
  float: right;
  background-color: #ffbe33;
  border: 0;
  border-radius: 7px;
  color: white;
  font-size: 20px;
  padding: 5px;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body,
.modal {
  color: #666 !important;
}
</style>
