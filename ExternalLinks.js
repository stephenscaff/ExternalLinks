/**
 * External Links
 * Finds real external links to open in a new tab.

 * @author Stephen Scaff
 */
const ExternalLinks = (() => {

   return{

     /**
      * Init
      */
     init(){
       this.bindEvents();
     },

     /**
      * Bind Events
      */
     bindEvents() {
       ExternalLinks.checkLinks();
     },

    /**
     * Check Links
     * Loops through page links, if external
     * calls Speed Bump modal and applies follow link to btn.
     */
    checkLinks() {
      let links = document.getElementsByTagName('a');

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
    isExternal(link) {

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

export default ExternalLinks;
