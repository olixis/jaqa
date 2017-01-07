<template>
  <div class="app-content">
    <div class="container">
      <h4>Política de Segurança</h4>
    </div>
  </div>
</template>

<script type="text/javascript">
</script>

<style lang="stylus">

  .q-login
    max-width: 650px
    margin: 30px auto
    box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 6px, rgba(0, 0, 0, 0.227451) 0px 3px 6px
    .q-login-button
      padding 0 30px
    .column-left, .column-right
      padding: 10px 20px
    .column-left
      min-width: 54%
    .column-right
      min-width: 44%
    .column-center
      max-width: 2%
      text-align: center
    .column-divider-text
      font-size: 12px
      color: #949494
      padding: 5px 0;
    .column-divider
      height: 40%
      width: 1px
      display: inline-block
      &.to-bottom
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(224, 224, 224), rgb(224, 224, 224));
      &.to-top
        background-image: linear-gradient(to bottom, rgb(224, 224, 224), rgb(224, 224, 224), rgba(0, 0, 0, 0));
    hr
      margin: 20px 0;
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(224, 224, 224), rgba(0, 0, 0, 0));

  .button.button-facebook
    background: #5768c5 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABI0lEQVR42nWRzS4EQRSFb2IjLGxN7LwImTWxEFsbS4v+iSbzEmw8iSUeQFgYklkIyQhDmsTMMNO3e+rvulUpSgenOpXu219OTu4BgF4TsyrB9PskGGM0jjHrNd1vKekfSfG4DJjxW0nSH0GkSdzpa/FgCiLMAFMGvIcxRGrwtLU3B3DQ0LcMRDWAGMhj8NJXdcB6Gz28WAR42ZQd2dYjBtIAGHJ6nQeQl+QVAM0GNxhXUT4LgBuT1nBX5QwkHjCSryNwoil77y/IPtH4CyDFDu3+SrHWnQYYLX2s4iHRnxnuG5zhjKxkHSCXY9C1IU/4a/IbMPy8W0CduhlPq+TnqgUDbx3rcOxmpVt1KCtkUOehLF+3L3qn2H6eAcD1ssU7cXV/AsbIj6Mq7ot4AAAAAElFTkSuQmCC') no-repeat 20px center !important
    padding: 10px 20px 10px 40px
    text-align: left
    width: 100%

  @media (max-width: 768px)
    .q-login
      .column
        padding: 10px

  #video-background
    position: fixed
    right: 0
    bottom: 0
    min-width: 100%
    min-height: 100%
    width: auto
    height: auto
    z-index: -100
    opacity: 0
    transition: opacity .5s
    &.opaque
      opacity: 1

</style>