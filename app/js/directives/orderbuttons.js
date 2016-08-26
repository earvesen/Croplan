four51.app.directive('orderbuttons', [function() {
    var directive = {
        restrict: 'E',
        template: template,
        link: function(scope, element, attrs) {
            attrs.$observe('continue', function(val) {
                scope.continue = val == 'true' ? true : false;
            });

            attrs.$observe('view', function(val) {
                if (val) {
                    var view;
                    switch (val) {
                        case 'cart':
                            view = 'cart';
                            break;
                        case 'checkout':
                            view = 'checkout';
                            break;
                        default:
                            break;
                    }
                    scope.view = 'partials/controls/' + (view == 'cart' ? 'cartButtons.html' : 'checkoutButtons.html');
                }
            });
        }
    };
    return directive;

    function template() {
        return [
            '<style>',
            'orderbuttons {width:100%; margin:0 auto;}',
            //'.navbar-fixed-bottom {position:relative;}',
            'orderbuttons .cart-buttons li {width:25%;float:left; padding-right:10px; }',
            'orderbuttons .btn {border-radius:0; width:100%; margin:0 5px;}',
            'orderbuttons btn:nth-of-type(4) {margin-right:0; }',
            'orderbuttons .btn.btn-primary { text-transform:none; }',
            '@media (max-width:767px) { orderbuttons .cart-buttons li {width:100%;} }',
            '@media (max-width:767px) { orderbuttons .btn {border-radius:0;width:100%; margin:5px 0;} }',
            '</style>',
            '<ul ng-include="view"></ul>'
        ].join('');
    }
}]);