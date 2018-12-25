/**
 * External Links
 * Adds target="_blank" to real external links
 * so they open in a new tab.
 *
 * @version 1.2 (es6)
 * @author Stephen Scaff
 */
const ExternalLinks = (() => {

  const links = document.getElementsByTagName('a');

  return {

     /**
      * Init
      */
     init() {
       if (!links.length > 0) return;
        this.bindEvents();
     },

     /**
      * Bind Events
      */
     bindEvents() {
       ExternalLinks.checkLinks();
     },

     /**
     * ForEach Utility
     * Ensure we can loop over a object or nodelist
     * @see https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
     */
    forEach: function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    },

    /**
     * Check Links
     * Loops through page links, if external
     * calls Speed Bump modal and applies follow link to btn.
     */
    checkLinks() {
      ExternalLinks.forEach (links, function (index, link) {
        if (!ExternalLinks.isExternal(link)) return
        link.target = '_blank';
      });
    },

    /**
     * Checks if link is really external
     * and not a 'fake' external (ie; mailto, tel, js handler)
     * @param {HTML Element} link - single link instance
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

// Export
export default ExternalLinks;

// Init
// ExternalLinks.init();
