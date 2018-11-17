/**
 * External Links
 * Finds real external links to open in a new tab.

 * @author Stephen Scaff
 */
 var ExternalLinks = (function() {


   return{

     /**
      * Init
      */
     init: function() {
       this.bindEvents();
     },

     /**
      * Bind Events
      */
     bindEvents:function() {
       ExternalLinks.checkLinks();
     },

    /**
     * Check Links
     * Loops through page links, if external
     * calls Speed Bump modal and applies follow link to btn.
     */
    checkLinks: function() {
      var links = document.getElementsByTagName('a');

      Util.forEach ( links, function (index, link) {

        if (!ExternalLinks.isExternal(link)) return

        link.target = '_blank';

      });
    },

    /**
     * Checks if link is really external
     * and not a 'fake' external (ie; mailto, tel, js handler)
     * @return boolean
     */
    isExternal: function(link) {

      return (
        link.hasAttribute("href")     &&
        !link.href.match(/^mailto\:/) &&
        !link.href.match(/^tel\:/)    &&
        !link.href.match(/^#\:/)      &&
        link.hostname !== window.location.hostname
      );
    },
 };
})();

ExternalLinks.init();
