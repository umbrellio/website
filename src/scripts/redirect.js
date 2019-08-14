const currentPathname = window.location.pathname

if (!currentPathname.match(/^\/(en|ru)/)) {
  window.location.pathname = `/en${window.location.pathname}`
}
