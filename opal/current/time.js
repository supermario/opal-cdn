/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

  $opal.add_stubs(['$strftime']);
  return (function($base, $super) {
    function $Time(){};
    var self = $Time = $klass($base, $super, 'Time', $Time);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$parse', function(str) {
      var self = this;

      return new Date(Date.parse(str));
    });

    return (def.$iso8601 = function() {
      var self = this;

      return self.$strftime("%FT%T%z");
    }, nil) && 'iso8601';
  })(self, null)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/time.js.map
;
