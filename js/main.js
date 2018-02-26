// Hi, source code peeker!
//
// This is probably the ugliest piece of the whole website. I'm no longer a
// full time JS dev, so I don't care about it anymore. Sorry to disappoint you!
//


// Rotator definition
if($('.rotator').length) {
  let $time = 200
  let $parent = $('.rotator')
  let $mode = "next"

  setInterval(function() {
    // find currently active child
    let $active = $parent.children('.active')
    let $next

    if($mode === "next") {
      // find next item
      $next = $active.next()

      // if no next item found, reset to first child
      if(!$next.length) {
        $mode = "prev"
        $next = $active.prev()
      }
    }
    else {
      // find prev item
      $next = $active.prev()
      // if no next item found, reset to first child
      if(!$next.length) {
        $mode = "next"
        $next = $active.next()
      }
    }

    // remove .active from $active
    $active.removeClass('active')

    // add .active to the next item
    $next.addClass('active')
  }, $time)
}

// Date+time
if($('.bar').length) {
  $time = $('.bar').children('.time')
  $date = $('.bar').children('.date')

  let refreshFunc = function() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    if(month < 10) {
      month = '0' + month
    }
    $date.text(day + '/' + month)

    let hours = date.getHours()
    if(hours < 10) {
      hours = '0' + hours
    }
    let minutes = date.getMinutes()
    if(minutes < 10) {
      minutes = '0' + minutes
    }
    let seconds = date.getSeconds()
    if(seconds < 10) {
      seconds = '0' + seconds
    }
    $time.text(hours + ':' + minutes + ':' + seconds)
  }

  setInterval(refreshFunc, 2000) // tmux refreshes per 2s, so we do that here too ^_^
  refreshFunc()
}
