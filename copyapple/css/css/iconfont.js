;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.852504 466.544739c-0.016373-182.64583-148.606573-331.23603-331.244216-331.23603-88.478124 0-171.654498 34.452673-234.231719 97.027847-62.559824 62.569034-97.012498 145.738245-97.012498 234.208183 0 88.478124 34.452673 171.656545 97.020684 234.223532 62.569034 62.559824 145.745409 97.020684 234.223532 97.020684 82.280981 0 159.744237-30.126134 220.551138-84.620259l24.11728 24.11728-1.411139 1.411139c-6.236028 6.235005-6.236028 16.34527 0 22.580275L834.270844 881.68369c6.235005 6.235005 16.34527 6.235005 22.580275 0l25.394367-25.402553c6.237051-6.227842 6.237051-16.337083 0-22.574135L761.841232 713.301725c-6.235005-6.235005-16.34527-6.235005-22.580275 0l-1.411139 1.411139-23.945365-23.953551C770.509658 629.438713 801.852504 550.486546 801.852504 466.544739zM270.252097 666.900929c-53.526077-53.517891-82.998319-124.669394-82.998319-200.355167 0-75.67861 29.472242-146.828067 82.990133-200.348004 53.519937-53.517891 124.685767-82.998319 200.363354-83.005482 156.229181 0.008186 283.3453 127.124306 283.353486 283.353486 0 75.67861-29.487591 146.845463-83.005482 200.363354-53.519937 53.517891-124.669394 82.990133-200.348004 82.998319C394.921491 749.906411 323.772035 720.41882 270.252097 666.900929z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M791.487729 544.095473c-1.279999-129.695874 105.759898-191.871814 110.527893-194.975811-60.159942-88.031915-153.855851-100.063903-187.231819-101.471902-79.743923-8.063992-155.583849 46.943955-196.06381 46.943955-40.351961 0-102.8159-45.759956-168.959836-44.543957-86.911916 1.279999-167.071838 50.527951-211.807795 128.383876-90.303913 156.703848-23.135978 388.831623 64.895937 515.9355 43.007958 62.20794 94.303909 132.063872 161.631843 129.567874 64.831937-2.591997 89.375913-41.951959 167.743837-41.951959s100.415903 41.951959 169.055836 40.671961c69.759932-1.311999 113.98389-63.391939 156.703848-125.791878 49.375952-72.15993 69.727932-142.047862 70.911931-145.631859-1.535999-0.703999-136.063868-52.223949-137.407867-207.135799zM662.559854 163.519842c35.743965-43.359958 59.871942-103.5199 53.279948-163.519842-51.48795 2.111998-113.88789 34.303967-150.815854 77.535925-33.151968 38.367963-62.14394 99.615903-54.367947 158.431847 57.471944 4.479996 116.127888-29.215972 151.903853-72.44793z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bag" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M725.333333 256v-42.666667C725.333333 95.509333 629.824 0 512 0S298.666667 95.509333 298.666667 213.333333v42.666667H128v640c0 70.72 57.28 128 128 128h512c70.72 0 128-57.28 128-128V256H725.333333z m-341.333333-42.666667c0-70.688 57.312-128 128-128s128 57.312 128 128v42.666667H384v-42.666667z m426.666667 682.666667c0 23.573333-19.093333 42.666667-42.666667 42.666667H256c-23.573333 0-42.666667-19.093333-42.666667-42.666667V341.333333h597.333334v554.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)