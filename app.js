var app = angular.module('myApp', []);
app.controller('MyController', function ($scope) {
    $scope.title = 'CLOTHING STORE';
    $scope.titlee = 'Products';
    $scope.items = [
        { name: 'Anarkali Set', price: 100.99, image: 'anarkali.jpeg' }, { name: 'Shirts', price: 49.99, image: 'shirts.jpeg' }, { name: 'Sneakers', price: 89.99, image: 'sneakers.jpg' }, { name: 'Office Suits', price: 129.99, image: 'suit.jpg' }];
    $scope.newItemName = '';
    $scope.newItemPrice = '';
    $scope.newItemImage = '';
    $scope.showList = true;
    $scope.addItem = function () {
        if ($scope.newItemName && $scope.newItemPrice && $scope.newItemImage) {
            $scope.items.push({ name: $scope.newItemName, price: $scope.newItemPrice, image: $scope.newItemImage });
            $scope.newItemName = '';
            $scope.newItemPrice = '';
            $scope.newItemImage = '';
        }
    };
    $scope.toggleList = function () {
        $scope.showList = !$scope.showList;
    };

        // New arrivals data
        $scope.newArrivals = [
            {
                name: 'Stylish Sneakers',
                image: 'new-product1.jpg',
                description: 'Step into the latest trends with our comfortable and fashionable sneakers.'
            },
            {
                name: 'Elegant Dresses',
                image: 'new-product2.jpg',
                description: 'Discover the elegance of our new collection of dresses suitable for any occasion.'
            },
            {
                name: 'Trendy Accessories',
                image: 'new-product3.jpg',
                description: 'Complete your look with our stylish accessories, from hats to handbags.'
            }
        ];
    
        // Toggle New Arrivals section visibility
        $scope.showNewArrivals = true;
    
        $scope.toggleNewArrivals = function () {
            $scope.showNewArrivals = !$scope.showNewArrivals;
        };
}); 
