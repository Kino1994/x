javascript:(function() {
    function updateStyles() {
        document.body.style.backgroundColor = "rgb(255, 255, 255)";

        var primaryColumn = document.querySelector('[data-testid="primaryColumn"]');
        if (primaryColumn) {
            primaryColumn.style.backgroundColor = "rgb(255, 255, 255)";
        }

        var sidebarColumn = document.querySelector('[data-testid="sidebarColumn"]');
        if (sidebarColumn) {
            sidebarColumn.style.backgroundColor = "rgb(255, 255, 255)";
        }

        var searchColumn = document.querySelector('[data-testid="SearchBox_Search_Input"]');
        if (searchColumn) {
            searchColumn.style.backgroundColor = "rgb(255, 255, 255)";
        }

        var elements = document.querySelectorAll('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3');
        elements.forEach(function(element) {
            var computedStyle = window.getComputedStyle(element);
            if (computedStyle.color === 'rgb(231, 233, 234)') {
                element.style.color = 'rgb(0, 0, 0)';
            }
        });

        var kemksiElements = document.querySelectorAll('.css-175oi2r.r-kemksi');
        kemksiElements.forEach(function(element) {
            element.style.backgroundColor = "rgb(255, 255, 255)";
        });

        var zmotElements = document.querySelectorAll('.css-175oi2r.r-5zmot');
        zmotElements.forEach(function(element) {
            element.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        });

        var listBoxElement = document.querySelector('[role="listbox"]');
        if (listBoxElement) {
            listBoxElement.style.backgroundColor = "rgb(255, 255, 255)";
        }

        var spanElement = document.querySelector('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3[style="text-overflow: unset;"]');
        if (spanElement) {
            spanElement.style.color = 'rgb(0, 0, 0)';
        }

        var recentSearchesItems = document.querySelectorAll('[data-testid="typeaheadRecentSearchesItem"]');
        recentSearchesItems.forEach(function(element) {
            element.style.backgroundColor = "rgb(255, 255, 255)";
        });

        var savedSearchesItems = document.querySelectorAll('[data-testid="typeaheadSavedSearchesItem"]');
        savedSearchesItems.forEach(function(element) {
            element.style.backgroundColor = "rgb(255, 255, 255)";
        });

        var navigationElements = document.querySelectorAll('[role="navigation"] svg, [role="heading"] svg');
        navigationElements.forEach(function(svgElement) {
            svgElement.style.color = "black";
        });
    }
    
    setInterval(updateStyles, 0);
    
})();
