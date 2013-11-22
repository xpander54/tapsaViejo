



// ############################################################################
// ### radioOnClick:
// ############################################################################
function radioOnClick(el, url) {
  location.href = url + '?lang=eng&' + el.name + '=' + escape(el.value);
}


// ############################################################################
// ### accessBlobBtnClick:
// ############################################################################
function accessBlobBtnClick(fmName, elName, v) {
  document.forms[ fmName].elements[ elName].value=v;
}


// ############################################################################
// ### delBlobBtnClick:
// ############################################################################
function delBlobBtnClick(fmName, elName, submitBtn) {
  var b = confirm("Do you really want to delete this object?");
  if (b) {
    document.forms[fmName].elements[elName].value="1";
    document.forms[fmName].elements[submitBtn].click();
  }
}

// ############################################################################
// ### browseEnumBtnClick:
// ############################################################################
function browseEnumBtnClick(fmName, elName, enumName)
{
  var title = "Please%20choose%20an%20object";
  var url = "browse_enum";
  var elValue = "";
  if (fmName.length > 0 && elName.length > 0)
  {
    elValue = document.forms[fmName].elements[elName].value;
  }
  params = '?lang=eng';
  params += '&fmName=' + escape(fmName);
  params += '&elName=' + escape(elName);
  params += '&elValue=' + escape(elValue);
  params += '&enum=' + escape(enumName);
  open_function(url+params,400,50,",resizable=yes,scrollbars=yes");
  return false;
}

/**
 * collectionPositionPopulate
 *
 * @param el
 * @param len
 * @see f_collectionbtn.dtml
 */
function collectionPositionPopulate(el, len) {
  if ( el.options.length == 1) {
    selectedValue = el.options[0].text;
    el.options.length = 0;
    for (var i = 0; i < len; i++) {
      var value = ''+(i+1);
      addOption( el, value, value, selectedValue);
    }
  }
}

/**
 * collectionDeleteBtnOnClick
 *
 * @param href
 * @see f_collectionbtn.dtml
 */
function collectionDeleteBtnOnClick(href)
{
  confirmDeleteBtnOnClick(href + '&btn=delete');
}

/**
 * Confirm delete.
 *
 * @param href
 */
function confirmDeleteBtnOnClick(href)
{
  if (confirm("Do you really want to delete this object?")) {
    if (href.indexOf('lang=eng') < 0) {
      href += '&lang=eng';
    }
    location.href = href;
  }
}

// ############################################################################
// ### confirmChanges()
// ############################################################################
function confirmChanges(el)
{
  if (el && self.name == 'cameFromForm') {
    el.target = '_parent';
  }
  if (navigator.platform.indexOf("Mac")<0) {
    var anyFormModified = false;
    for (i=0; i<document.forms.length; i++) {
      anyFormModified |= isFormModified(document.forms[i]);
    }
    if ( anyFormModified)
      if (!confirm("Do you really want to discard changes?"))
        return false;
  }
  return true;
}

// ############################################################################
// ### f_open_input(fmName, elName, css, wrap)
// ############################################################################
function f_open_input(fmName, elName, css, wrap) 
{
  if (self.msgWindow) self.msgWindow.close();
  url = "f_open_input_html";
  url += "?lang=eng";
  url += "&fmName="+fmName;
  url += "&elName="+elName;
  url += "&css="+css;
  url += "&wrap="+wrap;
  open_function(url,530,300,",resizable=no,scrollbars=no");
}

