




  String.prototype.leftTrim = function () {
    return (this.replace(/^\s+/,""));
  };
  String.prototype.rightTrim = function () {
    return (this.replace(/\s+$/,""));
  };
  //combination of "leftTrim" and "rightTrim";
  String.prototype.basicTrim = function () {
    return (this.replace(/\s+$/,"").replace(/^\s+/,""));
  };
  
// #############################################################################
// ###
// ### Highlight Text
// ###
// #############################################################################

  function capitalize(Text) {
    c=Text.split(""); c[0]=c[0].toUpperCase(); return c.join("");
  }

  function highlight_text(text) {
     var exp = "";
     for (var i = 0; i < text.length; i++) 
       exp += "(" + text.charAt(i) + "|" + text.toUpperCase().charAt(i) + "|" + text.toLowerCase().charAt(i) + ")";
     var regexp = new RegExp( "(" + exp + ")", "g");
     var el = document.getElementsByTagName("body")[0];
     var content=el.innerHTML.split("<"); 
     for(var mb=0; mb < content.length; mb++) {
        var cell = content[mb].split(">");
        if(cell[1] && cell[1]!="" && cell[1].basicTrim()!="") { 
           cell[1] = cell[1].replace( regexp, "<span class=\"highlight\">$1</span>"); 
           content[mb]=cell.join(">");
        }
     }
     content=content.join("<"); 
     el.innerHTML=content; 
  }

  function do_highlight(text) { 
    window.setTimeout("highlight_text('"+text+"')",100);
  }


// #############################################################################
// ###
// ### Content-Editable
// ###
// #############################################################################

/**
 * Users can change the contents of a Web page when the contentEditable property is set 
 * to TRUE. This method submits the changes for the object specified by id.
 *
 * @param url		Url of the object to be changed.
 * @param id		Id of the object to be changed.
 * @param key		Key of the property to be changed.
 */
function contenteditableChangeClick(url, id, key)
{
  var elName = key + "_" + id;
  var elValue = escape(window.eval(elName).innerHTML);
  var fmName = id + "Form";
  document.write('<form name="' + fmName + '" action="' + url + '/manage_changeTextProperties" method="post">');
  document.write('<input type="hidden" name="lang" value="eng">');
  document.write('<input type="hidden" name="preview" value="preview">');
  document.write('<input type="hidden" name="key" value="' + key + '">');
  document.write('<input type="hidden" name="custom" value="' + elValue + '">');
  document.write('</form>');
  var fm = document.forms[fmName];
  fm.submit();
}

/**
 * Users can change the contents of a Web page when the contentEditable property is set 
 * to TRUE.
 */
function contentEditableBlur( el, id, objAttrName)
{
  var text = el.innerHTML;
  var fm = document.forms['form0_'+id];
  var formats = new Array();
  
   
    formats['indented_block'] = new Array();
    formats['indented_block']['tag'] = 'blockquote';
    formats['indented_block']['subtag'] = 'br';
   
  
   
    formats['plain_html'] = new Array();
    formats['plain_html']['tag'] = '';
    formats['plain_html']['subtag'] = '';
   
  
   
    formats['unordered_list'] = new Array();
    formats['unordered_list']['tag'] = 'ul';
    formats['unordered_list']['subtag'] = 'li';
   
  
   
    formats['ordered_list'] = new Array();
    formats['ordered_list']['tag'] = 'ol';
    formats['ordered_list']['subtag'] = 'li';
   
  
   
    formats['body'] = new Array();
    formats['body']['tag'] = 'p';
    formats['body']['subtag'] = 'br';
   
  
   
    formats['headline_2'] = new Array();
    formats['headline_2']['tag'] = 'h2';
    formats['headline_2']['subtag'] = 'br';
   
  
   
    formats['headline_3'] = new Array();
    formats['headline_3']['tag'] = 'h3';
    formats['headline_3']['subtag'] = 'br';
   
  
   
    formats['headline_4'] = new Array();
    formats['headline_4']['tag'] = 'h4';
    formats['headline_4']['subtag'] = 'br';
   
  
  var formatElement = fm.elements['format'];
  var format = '?';
  if ( formatElement.value)
    format = formatElement.value;
  else
    format = formatElement.options[ formatElement.selectedIndex].value;
  var tag = formats[ format]['tag'].toUpperCase();
  var subtag = formats[ format]['subtag'].toUpperCase();
  // Remove tags.
  if ( tag.length > 0)
  {
    var startTag = '<' + tag;
    var endTag = '</' + tag;
    if ( text.indexOf( startTag) == 0)
      text = text.substring( text.indexOf( '>' ,text.indexOf(startTag))+1);
    text = text.replace(startTag+'>', '');
    if ( text.lastIndexOf( endTag) > 0 && 
         text.lastIndexOf('>',text.lastIndexOf(endTag)) == text.length-1)
      text = text.substring( 0, text.lastIndexOf( endTag));
    text = text.replace(endTag+'>', '');
  }
  // Remove sub-tags.
  if ( subtag.length > 0)
  {
    var newText = '';
    var startTag = '<' + subtag + '>';
    var endTag = '</' + subtag + '>';
    while ( text.indexOf( startTag) >= 0)
      text = text.replace( startTag, '');
    while ( text.indexOf( endTag) >= 0)
      text = text.replace( endTag, '');
  }
  // Remove para-entities.
  var paraEnt = '&para;\n';
  while ( text.indexOf( paraEnt) >= 0)
    text = text.replace( paraEnt, '');
  // Trim.
  while ( text.length > 0 && text.charAt(0) <= ' ')
    text = text.substring(1);
  while ( text.length > 0 && text.charAt( text.length-1) <= ' ')
    text = text.substring(0, text.length-1);
  // Set text.
  var objAttrElement = fm.elements[ objAttrName];
  objAttrElement.value = text;
}


// #############################################################################
// ###
// ### Drag & Drop (http://aktuell.de.selfhtml.org/tippstricks/dhtml/draganddrop/index.htm)
// ###
// #############################################################################


//Das Objekt, das gerade bewegt wird.
var dragobjekt = null;

// Position, an der das Objekt angeklickt wurde.
var dragx = 0;
var dragy = 0;

// Mausposition
var posx = 0;
var posy = 0;

/**
 * Initialisierung der �berwachung der Events
 */
function draginit() {
  document.ondragstart = Function("return false;");
  document.onmousemove = drag;
  document.onmouseup = dragstop;
}

/**
 * Wird aufgerufen, wenn ein Objekt bewegt werden soll.
 */
function dragstart(element) {
  dragobjekt = element;
  dragx = posx - dragobjekt.offsetLeft;
  dragy = posy - dragobjekt.offsetTop;
}

/**
 * Wird aufgerufen, wenn ein Objekt nicht mehr bewegt werden soll.
 */
function dragstop() {
  dragobjekt=null;
}

/**
 * Wird aufgerufen, wenn die Maus bewegt wird und bewegt bei Bedarf das Objekt.
 */
function drag(ereignis) {
  posx = document.all ? window.event.clientX : ereignis.pageX;
  posy = document.all ? window.event.clientY : ereignis.pageY;
  if(dragobjekt != null) {
    dragobjekt.style.left = (posx - dragx) + "px";
    dragobjekt.style.top = (posy - dragy) + "px";
  }
}


// #############################################################################
// ###
// ### Direct-Edit 2.0
// ###
// #############################################################################

/**
 * Direct-Edit: Form Submit
 */
function directEditFormSubmit( fm)
{
  directEditCloseAll();
  return self.btnClicked != 'Cancel' &&
         self.btnClicked != 'Back';
}

/**
 * Direct-Edit: Expand It
 */
var directEditAutoClose = false;
function directEditExpandIt( div_id, poser_id, autoClose)
{
  directEditAutoClose = autoClose;
  var coords = {x: 0, y: 0};
  var el = document.images[ poser_id];
  coords.x += el.width;
  coords.y += el.height;
  while (el) {
    coords.x += el.offsetLeft;
    coords.y += el.offsetTop;
    el = el.offsetParent;
  }
  var el = document.getElementById( div_id);
  el.style.left = coords['x'] + "px";
  el.style.top = coords['y'] + "px";
  el.style.position = "absolute";
  el.style.display = "block";
  el.style.visibility = "visible";
}


/**
 * Direct-Edit: Close All
 */
function directEditCloseAll()
{
  directEditCloseAllByClassName( "DirectEditActionList");
  directEditCloseAllByClassName( "DirectEditManageForm");
}


/**
 * Direct-Edit: Start/Stop Close
 */
var directEditActive;
function directEditStartClose() {
  if ( directEditAutoClose)
    directEditActive = window.setTimeout( "directEditCloseAll()", 1000);
}
function directEditStopClose() {
  if ( directEditActive) 
    window.clearTimeout( directEditActive);
}


/**
 * Direct-Edit: Close All By Class-Name
 */
function directEditCloseAllByClassName( name)
{
  directEditStopClose();
  // IE4
  var browser = navigator.appName;
  if (browser=="Microsoft Internet Explorer") {
    tempColl = document.all.tags( "div");
    for (i=0; i<tempColl.length; i++) {
    whichEl = tempColl(i);
      if (whichEl.className == name){
        whichEl.style.display = "none";
        whichEl.style.visibility = "hidden";
      }
    }
  } 
  // DOM
  else {
    tempColl = document.getElementsByTagName( "div");
    for (i=0; i<tempColl.length; i++) {
      whichEl = tempColl[i];
      if (whichEl.className == name) 
        whichEl.style.visibility = "hidden";
    }
  }
}


// #############################################################################
// ###
// ### Character-Format
// ###
// #############################################################################

var selectedText = "";

/**
 * manage_browseObjsBtnClick:
 */
function manage_browseObjsBtnClick(fmName, elUrlName, elTitleName)
{
  var title = "Please%20choose%20an%20object";
  var url = "manage_browse_objs";
  var elUrlValue = "";
  if (fmName.length>0 && elUrlName.length>0)
  {
    elUrlValue = document.forms[ fmName].elements[ elUrlName].value;
  }
  params = 'lang=eng';
  params += '&fmName=' + escape( fmName);
  params += '&elUrlName=' + escape( elUrlName);
  params += '&elUrlValue=' + escape( elUrlValue);
  params += '&elTitleName=' + escape( elTitleName);
  if ( selectedText) {
    params += '&selectedText=' + escape( selectedText);
  }
  open_frame(title,url,params,420,360,",resizable=yes,scrollbars=yes");
  return false;
}

/**
 * browseObjsBtnClick:
 */
function browseObjsBtnClick(fmName, elUrlName, elTitleName)
{
  var title = "Please%20choose%20an%20object";
  var url = "browse_objs";
  var elUrlValue = "";
  if (fmName.length>0 && elUrlName.length>0)
  {
    elUrlValue = document.forms[ fmName].elements[ elUrlName].value;
  }
  params = 'lang=eng';
  params += '&fmName=' + escape( fmName);
  params += '&elUrlName=' + escape( elUrlName);
  params += '&elUrlValue=' + escape( elUrlValue);
  params += '&elTitleName=' + escape( elTitleName);
  if ( selectedText) {
    params += '&selectedText=' + escape( selectedText);
  }
  open_frame(title,url,params,420,360,",resizable=yes,scrollbars=yes");
  return false;
}

/**
 * richedit
 */
function richedit(fmName, elName) 
{
  var edit= {}
  edit.src = document.forms[fmName].elements[elName].value;
  edit.styledata = document.styleSheets;
  v = document.forms[fmName].elements[elName].value;
  document.forms[fmName].elements[elName].value = window.showModalDialog("/misc_/zmsrte/richedit.html?elValue=" + escape(v),"dialogWidth:670px;dialogHeight:400px;help:no;status:no;scroll:no;resizable:yes;");
}

/**
 */
function selectObject(path, title) 
{
  if (path.indexOf('{$')==0 && path.lastIndexOf('}')==path.length-1)
    path = '<'+'dtml-var expr="getLinkUrl(\''+path+'\',REQUEST)"/>';
  var fTag = 'a';
  var aTag = '<'+fTag+' href="'+path+'">';
  var eTag = '</'+fTag+'>';
  tagSelectedText( aTag, eTag);
}

/**
 * Remove tags from given string.
 */
function untag( s) {
  return s.replace( /<(..*?)>/g, '');
}

/**
 * Get tagged index of untagged string in given string.
 */
function taggedStart( s1, s2)
{
  var r = '';
  var b = true;
  for (var i = 0; i < s1.length; i++) {
    var c = s1.charAt( i);
    if ( b && c == '<')
      b = false;
    else if ( !b && c == '>')
      b = true;
    else if ( b)
      r += c;
    if ( r == s2)
      return i;
  }
  return -1;
}

/**
 * Tag selected text.
 */
function tagSelectedText( aTag, eTag, fDirectEditing) {
  var input = self.el;
  /* internet explorer */
  if( typeof document.selection != 'undefined') {
    var range = document.selection.createRange();
    var selText = range.text;
    /* Strip trailing blanks */
    var trailingBlanks = '';
    while ( selText.length > 0 && selText.charAt( selText.length - 1) == ' ') {
      selText = selText.substr( 0, selText.length - 1);
      trailingBlanks += ' ';
    }
    if ( selText.length > 0) {
      /* f�r Direct-Editing */
      if ( fDirectEditing) {
        var inpValue = input.value;
        /* Preceding selected text */
        var fullText = untag( inpValue);
        var aRange = range.duplicate();
        while ( fullText.indexOf( aRange.text) != 0)
          aRange.moveStart( 'word', -1);
        aRange.moveEnd( 'word', -1);
        /* Find Preceding selected text in raw-html of input */
        var start = taggedStart( inpValue, aRange.text);
        while ( inpValue.charAt( start) == ' ')
          start++;
        /* Apply value */
        input.value = inpValue.substr( 0, start) + aTag + selText + eTag + inpValue.substr( start + (selText+trailingBlanks).length - 1);
      }
      else {
        /* Apply value */
        var newText;
        if ( aTag.length > 0 && typeof eTag == 'undefined')
          newText = aTag + trailingBlanks;
        else
          newText = aTag + selText + eTag + trailingBlanks;
        range.text = newText;
        /* Anpassen der Cursorposition */
        range = document.selection.createRange();
        range.moveStart('character', newText.length);
        range.select();
      }
    }
  }
  /* newer gecko-based browsers */
  else if( typeof input.selectionStart != 'undefined') {
    var start = self.selectionStart;
    var end = self.selectionEnd;
    var inpValue = input.value;
    var selText = inpValue.substring( start, end);
    // Strip trailing blanks
    var trailingBlanks = '';
    while ( selText.length > 0 && selText.charAt( selText.length - 1) == ' ') {
      selText = selText.substr( 0, selText.length - 1);
      trailingBlanks += ' ';
    }
    if ( selText.length > 0) {
      /* Apply value */
      var newText;
      if ( aTag.length > 0 && typeof eTag == 'undefined')
        newText = aTag + trailingBlanks;
      else
        newText = aTag + selText + eTag + trailingBlanks;
      input.value = input.value.substr( 0, start) + newText + input.value.substr( end);
      /* Anpassen der Cursorposition */
      var pos = start + newText.length;
      input.selectionStart = pos;
      input.selectionEnd = pos;
    }
  }
}

/**
 * Untag selected text.
 * Returns true if selected text was untagged, false otherwise.
 */
function untagSelectedText( fTag, fAttrs, ld, rd, fDirectEditing) {
  var input = self.el;
  /* internet explorer */
  if( typeof document.selection != 'undefined') {
    var range = document.selection.createRange();
    var selText = range.text;
    /* f�r Direct-Editing */
    if ( fDirectEditing) {
      var inpValue = input.value;
      /* Preceding selected text */
      var fullText = untag( inpValue);
      var aRange = range.duplicate();
      while ( fullText.indexOf( aRange.text) != 0)
        aRange.moveStart( 'word', -1);
      aRange.moveEnd( 'word', -1);
      /* Find Preceding selected text in raw-html of input */
      var start = taggedStart( inpValue, aRange.text);
      while ( inpValue.charAt( start) == ' ')
        start++;
      var aTag = ld+fTag+rd;
      var eTag = ld+'/'+fTag+rd;
      var taggedText = selText;
      /* Strip trailing blanks */
      while ( taggedText.length > 0 && taggedText.charAt( taggedText.length - 1) == ' ') {
        taggedText = taggedText.substr( 0, taggedText.length - 1);
        eTag += ' ';
      }
      /* Apply value */
      if ( inpValue.substr( start).indexOf( aTag + taggedText + eTag) == 0 ||
           inpValue.substr( start).indexOf( aTag.toUpperCase() + taggedText + eTag.toUpperCase()) == 0 ) {
        input.value = inpValue.substr( 0, start) + selText + inpValue.substr( start + (aTag + taggedText + eTag).length);
        return true;
      }
    }
    else {
      var startTag = ld+fTag;
      var endTag = ld+'/'+fTag+rd;
      if ( selText.indexOf(startTag) == 0 && selText.lastIndexOf(endTag) == selText.length - endTag.length) {
        selText = selText.substr( startTag.length + 1, selText.lastIndexOf( endTag) - startTag.length - 1); 
        /* Apply value */
        range.text = selText;
        return true;
      }
      else {
        range.moveStart('character', -(startTag.length+1));
        range.moveEnd('character', endTag.length);
        var taggedText = range.text;
        if ( taggedText.indexOf(startTag) == 0 && taggedText.lastIndexOf(endTag) == taggedText.length - endTag.length) {
          /* Apply value */
          range.text = selText;
          return true;
        }
        else if ( fAttrs.length > 0) {
          startTag += fAttrs;
          range.moveStart('character', -fAttrs.length);
          var taggedText = range.text;
          if ( taggedText.indexOf(startTag) == 0 && taggedText.lastIndexOf(endTag) == taggedText.length - endTag.length) {
            /* Apply value */
            range.text = selText;
            return true;
          }
        }
      }  
    }
  }
  /* newer gecko-based browsers */
  else if( typeof input.selectionStart != 'undefined') {
    var start = self.selectionStart;
    var end = self.selectionEnd;
    var inpValue = input.value;
    var selText = inpValue.substring( start, end);
    var tagStart = inpValue.substr( 0, start);
    var i = tagStart.length;
    var c = tagStart.charAt( i - 1);
    if ( c == '>') {
      /* Handle DTML in a.href */
      i--;
      var l = 1;
      while ( l > 0 && i > 0) {
        c = tagStart.charAt( i - 1);
        if ( c == rd)
          l++;
        if ( c == ld)
          l--;
        i--;
      }
      if ( i >= 0) {
        var tag = tagStart.substr( i);
        tagStart = tagStart.substr( 0, i);
        if ( tag.indexOf(ld+fTag) == 0 && tag.indexOf(rd) > 0) {
          var tagEnd = inpValue.substr( end);
          if ( tagEnd.indexOf(rd) > 0) {
            var tag = tagEnd.substr( 0, tagEnd.indexOf(rd) + 1);
            tagEnd = tagEnd.substr( tagEnd.indexOf(rd) + 1);
            if ( tag.indexOf(ld+'/'+fTag+rd) == 0) {
              input.value = tagStart + selText + tagEnd;
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

/**
 * Set text-format.
 */
function setTextFormat( fTag, ld, rd, fDirectEditing) 
{
  var fAttrs = '';
  if (fTag.indexOf( ' ') > 0) {
    fAttrs = fTag.substring( fTag.indexOf( ' '));
    fTag = fTag.substring( 0, fTag.indexOf( ' '));
  }
  var input = self.el;
  selectedText = '';
  /* internet explorer */
  if( typeof document.selection != 'undefined') {
    var range = document.selection.createRange();
    selectedText = range.text;
  }
  /* newer gecko-based browsers */
  else if( typeof input.selectionStart != 'undefined') {
    self.selectionStart = input.selectionStart;
    self.selectionEnd = input.selectionEnd;
    var start = self.selectionStart;
    var end = self.selectionEnd
    selectedText = input.value.substring( start, end);
  }
  if ( selectedText.length == 0)
    return;
  if ( !untagSelectedText( fTag, fAttrs, ld, rd, fDirectEditing)) {
    if (fTag == 'a' && selectedText.indexOf('http://') < 0 && selectedText.indexOf('@') < 0) {
      if ( input.form)
        browseObjsBtnClick('','','');
      else
        browseObjsBtnClick('None','','');
    } 
    else {
      var aTag = ld
      aTag += fTag;
      if (fTag == 'a') {
        if (selectedText.indexOf("@")>0)
          aTag += ' href="mailto:' + selectedText + '"';
        else if (selectedText.indexOf("http://") < 0)
          aTag += ' href="http://' + selectedText + '" target="_blank"';
        else
          aTag += ' href="' + selectedText + '" target="_blank"';
      }
      else {
        aTag += fAttrs;
      }
      aTag += rd;
      var eTag = ld+'/'+fTag+rd;
      tagSelectedText( aTag, eTag, fDirectEditing);
    }
  }
}
  
/**
 * Set text-format for input.
 */
function setTextFormatInput( fTag, fmName, elName, divId) 
{
  self.el = document.forms[ fmName].elements[ elName];
  setTextFormat( fTag, '<', '>', divId);
  if ( divId) {
    var div = document.getElementById( divId);
    div.innerHTML = self.el.value;
  }
}

/**
 * Store caret.
 */
function storeCaret( textEl) 
{
  if (textEl.createTextRange)
    textEl.caretPos = document.selection.createRange().duplicate();
}


// #############################################################################
// ### calendarBtnClick:
// #############################################################################
function calendarBtnClick (fmName, elName) 
{
  open_function("f_calendar?elName=" + elName + "&fmName=" + fmName,170,190,",resizable=no,scrollbars=no");
}


// #############################################################################
// ### get_url:
// #############################################################################
function get_url (url, k0 ,v0 ,k1 ,v1 ,k2 ,v2 ,k3 ,v3 ,k4 ,v4 ) 
{
  if (k0 && v0) url += "?" + k0 + "=" + escape(v0);
  if (k1 && v1) url += "&" + k1 + "=" + escape(v1);
  if (k2 && v2) url += "&" + k2 + "=" + escape(v2);
  if (k3 && v3) url += "&" + k3 + "=" + escape(v3);
  if (k4 && v4) url += "&" + k4 + "=" + escape(v4);
  return url;
}


// #############################################################################
// ### open_frame:
// #############################################################################
function open_frame(title,url,params,width,height,options)
  {
    href = "f_frame";
    href += "?" + params;
    href += "&p_url=" + url;
    href += "&p_title=" + title;
    if ( height > screen.availHeight || width > screen.availWidth) {
      if ( options.indexOf( "scrollbars=") < 0) {
        if ( height > screen.availHeight)
          height = screen.availHeight;
        if ( width > screen.availWidth)
          width = screen.availWidth;
        options += ",scrollbars=yes";
      }
    }
    self.msgWindow = open(href,"msgWindow","width=" + width + ",height=" + height
      + ",screenX=" + (screen.width-width)/2
      + ",screenY=" + (screen.height-height)/2
      + ",dependent=yes"
      + ",left=" + (screen.width-width)/2
      + ",top=" + (screen.height-height)/2
      + options
      );
    if (self.msgWindow) {
      self.msgWindow.focus();
      if (self.msgWindow.opener == null) self.msgWindow.opener = self;
    }
  }


// #############################################################################
// ### open_function:
// #############################################################################
function open_function(url,width,height,options)
  {
    if ( height > screen.availHeight || width > screen.availWidth) {
      if ( options.indexOf( "scrollbars=") < 0) {
        if ( height > screen.availHeight)
          height = screen.availHeight;
        if ( width > screen.availWidth)
          width = screen.availWidth;
        options += ",scrollbars=yes";
      }
    }
    self.msgWindow = open(url, "Window", "width=" + width + ",height=" + height
      + ",screenX=" + (screen.width-width)/2
      + ",screenY=" + (screen.height-height)/2
      + ",dependent=yes"
      + ",left=" + (screen.width-width)/2
      + ",top=" + (screen.height-height)/2
      + options
      );
    if (self.msgWindow) {
      self.msgWindow.focus();
      if (self.msgWindow.opener == null) self.msgWindow.opener = self;
    }
  }


