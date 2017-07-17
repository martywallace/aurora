<script>
  export default {
    name: 'aurora-icon',

    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <i class="aurora-icon" :class="'aurora-icon--' + type"></i>
</template>

<style lang="scss">
  @font-face {
    font-family: 'aurora-icomoon';
    src:  url('../icons/icomoon.eot?ju59jb');
    src:  url('../icons/icomoon.eot?ju59jb#iefix') format('embedded-opentype'),
      url('../icons/icomoon.ttf?ju59jb') format('truetype'),
      url('../icons/icomoon.woff?ju59jb') format('woff'),
      url('../icons/icomoon.svg?ju59jb#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .aurora-icon {
    font-family: 'aurora-icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &--asterisk:before { content: "\f069"; }
    &--plus:before { content: "\f067"; }
    &--question:before { content: "\f128"; }
    &--minus:before { content: "\f068"; }
    &--heart:before { content: "\f004"; }
    &--star:before { content: "\f005"; }
    &--star-o:before { content: "\f006"; }
    &--check:before { content: "\f00c"; }
    &--close:before { content: "\f00d"; }
    &--remove:before { content: "\f00d"; }
    &--times:before { content: "\f00d"; }
    &--cog:before { content: "\f013"; }
    &--gear:before { content: "\f013"; }
    &--tag:before { content: "\f02b"; }
    &--bookmark:before { content: "\f02e"; }
    &--chevron-left:before { content: "\f053"; }
    &--chevron-right:before { content: "\f054"; }
    &--chevron-up:before { content: "\f077"; }
    &--chevron-down:before { content: "\f078"; }
    &--twitter:before { content: "\f099"; }
    &--facebook:before { content: "\f09a"; }
    &--facebook-f:before { content: "\f09a"; }
    &--bars:before { content: "\f0c9"; }
    &--navicon:before { content: "\f0c9"; }
    &--reorder:before { content: "\f0c9"; }
    &--caret-down:before { content: "\f0d7"; }
    &--caret-up:before { content: "\f0d8"; }
    &--caret-left:before { content: "\f0d9"; }
    &--caret-right:before { content: "\f0da"; }
    &--envelope:before { content: "\f0e0"; }
    &--linkedin:before { content: "\f0e1"; }
    &--bell:before { content: "\f0f3"; }
    &--angle-double-left:before { content: "\f100"; }
    &--angle-double-right:before { content: "\f101"; }
    &--angle-double-up:before { content: "\f102"; }
    &--angle-double-down:before { content: "\f103"; }
    &--angle-left:before { content: "\f104"; }
    &--angle-right:before { content: "\f105"; }
    &--angle-up:before { content: "\f106"; }
    &--angle-down:before { content: "\f107"; }
    &--desktop:before { content: "\f108"; }
    &--tablet:before { content: "\f10a"; }
    &--mobile:before { content: "\f10b"; }
    &--mobile-phone:before { content: "\f10b"; }
    &--circle-o:before { content: "\f10c"; }
    &--quote-left:before { content: "\f10d"; }
    &--quote-right:before { content: "\f10e"; }
    &--circle:before { content: "\f111"; }
    &--unlock-alt:before { content: "\f13e"; }
    &--ellipsis-h:before { content: "\f141"; }
    &--ellipsis-v:before { content: "\f142"; }
    &--rss-square:before { content: "\f143"; }
    &--youtube-play:before { content: "\f16a"; }
    &--dropbox:before { content: "\f16b"; }
    &--stack-overflow:before { content: "\f16c"; }
    &--instagram:before { content: "\f16d"; }
    &--flickr:before { content: "\f16e"; }
    &--bitbucket:before { content: "\f171"; }
    &--tumblr:before { content: "\f173"; }
    &--apple:before { content: "\f179"; }
    &--windows:before { content: "\f17a"; }
    &--android:before { content: "\f17b"; }
    &--linux:before { content: "\f17c"; }
    &--skype:before { content: "\f17e"; }
    &--slack:before { content: "\f198"; }
    &--google:before { content: "\f1a0"; }
    &--cube:before { content: "\f1b2"; }
    &--codepen:before { content: "\f1cb"; }
    &--share-alt:before { content: "\f1e0"; }
    &--cc-visa:before { content: "\f1f0"; }
    &--cc-mastercard:before { content: "\f1f1"; }
    &--cc-discover:before { content: "\f1f2"; }
    &--cc-amex:before { content: "\f1f3"; }
    &--cc-paypal:before { content: "\f1f4"; }
    &--cc-stripe:before { content: "\f1f5"; }
    &--trash:before { content: "\f1f8"; }
    &--genderless:before { content: "\f22d"; }
    &--pinterest-p:before { content: "\f231"; }
  }
</style>