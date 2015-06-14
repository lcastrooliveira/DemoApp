/**
 * Created by Lucas on 14/06/2015.
 */
'use strict'

eventsApp.directive('datePicker',function() {
    return {
        restrict: 'A',
        link: function(scope,element) {
            element.datepicker();
        }
    }
});

/**

'use strict'

eventsApp.directive('datePicker',function() {
    return {
        restrict: 'E',
        templateUrl: "/templates/directives/datepicker.html",
        controller: function($scope,calendarHelper) {
            $scope.showDatePicker = false;

            $scope.calendar = {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                monthName: calendarHelper.getMonthName(new Date().getMonth())
            }

            $scope.days = calendarHelper.getCalendarDays(new Date().getFullYear(), new Date().getMonth());

            $scope.nextMonth = function() {
                calendarHelper.incrementCalendarMonth($scope.calendar);
                $scope.calendar.monthName = calendarHelper.getMonthName($scope.calendar.month);
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }

            $scope.previousMonth = function() {
                calendarHelper.decrementCalendarMonth($scope.calendar);
                $scope.calendar.monthName = calendarHelper.getMonthName($scope.calendar.month);
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }

            $scope.nextYear = function() {
                $scope.calendar.year++;
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year,$scope.calendar.month);
            }

            $scope.previousYear = function() {
                $scope.calendar.year--;
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year,$scope.calendar.month);
            }
        },
        link: function(scope,element,attrs, controller) {
            var forElement = angular.element("#" + attrs.for);
            scope.element = forElement;
            forElement.on('focus',function() {scope.$apply(function() { scope.showDatePicker})});
            angular.element("body").on('click',function() {scope.$apply(function () {})})
            forElement.on('click',function(event) {event.stopPropagation(); });
            angular.element(".calendar-nav").on('click',function(event) {event.stopPropagation(); });
        }
    };
});
*/