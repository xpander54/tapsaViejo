<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> 
<html> 
<head> 
    <title>.::.Transportes Aereos Pegaso.......................:: Registro ::..</title> 
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<style type="text/css">
<script language="JavaScript">

function cerrar() {
var ventana = window.self;
ventana.opener = window.self;
ventana.close();
}

</script>
<!--
.Estilo4 {
	color: "#003399";
	font-weight: bold;
}
-->
</style>
<script language="JavaScript" type="text/JavaScript">
<!--



function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
//-->
</script>
<link href="st.css" rel="stylesheet" type="text/css">
</head> 
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #009933;
}
.Estilo2 {
	color: #000033;
	font-weight: bold;
}
.Estilo3 {
	color: #000033;
	font-style: italic;
}
.Estilo6 {color: #000033}
.Estilo7 {color: #000033}
.Estilo8 {color: #000033}
-->
</style>
 <script>
function revisar() {
if(formulario.nick.value.length < 3) { alert('El Nombre debe contener por lo mínimo 3 caractéres') ; return false ; }
if(formulario.pre1.value.length < 0) { alert('Tus Apellidos no son tan cortos') ; return false ; }
if(formulario.pre2.value.length == 0) { alert('Tu Correo no es tan corto') ; return false ; }
if(formulario.pre4.value.length == 0) { alert('Tu Ocupacion Falta') ; return false ; }
if(formulario.pre5.value.length == 0) { alert('Comentarios?) ; return false ; }
}
</script>
</head>

<body link="#006600" vlink="#009933" alink="#66CC66" onLoad="MM_preloadImages('registro/imgs/acerca-de-2.jpg','registro/imgs/soluciones-2.jpg','registro/imgs/servicios-2.jpg','registro/imgs/clientes-2.jpg')">
<? 
if (!$HTTP_POST_VARS){ 
?>
<table width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr> 
    <td><img src="contacto-top.jpg" width="770" height="144"></td>
  </tr>
  <tr> 
    <td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="770" height="30">
        <param name="movie" value="menu.swf">
        <param name="quality" value="high">
        <embed src="menu.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="770" height="30"></embed></object></td>
  </tr>
  <tr> 
    <td valign="middle"> <center>
      </center>
      <form name="formulario" action="http://www.ensayovisual.com/pegaso/registro/contacto.php" method=post onsubmit="return revisar()">
        <table width="505"  border="0" align="center" cellpadding="0" cellspacing="0">
          <tr valign="middle"> 
            <td width="128" height="29"><font color="#006600" size="2" face="Verdana, Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"> 
              <strong>Nombre: </strong></span></font></td>
            <td width="377"> <font color="#333333"> 
              <input type="text" name="nick" maxlength="20" class="form" >
              </font></td>
          </tr>
          <tr valign="middle"> 
            <td height="29"><font color="#006600" size="2" face="Verdana, Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Empresa:</strong> 
              </span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre1" maxlength="200" class="form">
              </font></td>
          </tr>
          <tr valign="middle"> 
            <td height="29"><font color="#006600" size="2" face="Verdana, Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Puesto:</strong></span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre3" maxlength="20" class="form" >
              </font></td>
          </tr>
          <tr valign="middle"> 
            <td height="29"><font color="#006600" size="2" face="Verdana, Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Email: 
              </strong> </span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre4" maxlength="200" class="form" >
              </font></td>
          </tr>
          <tr valign="middle"> 
            <td height="29" valign="top"><font color="#006600">&nbsp;</font></td>
            <td>&nbsp;</td>
          </tr>
          <tr valign="middle"> 
            <td height="29" valign="top"><font color="#006600" size="2" face="Verdana, Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Comentarios: 
              </strong> </span></font></td>
            <td><font color="#333333"> 
              <textarea name="pre5" cols=50 rows=6></textarea>
              </font></td>
          </tr>
          <tr align="center"> 
            <td height="29" colspan="2"><font color="#333333"> 
              <input name="submit" type=submit value="Enviar">
              </font></td>
          </tr>
        </table>
      </form></td>
  </tr>
  <tr> 
    <td height="107" valign="middle"> <div align="center"><font color="#666666" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><font color="#009933" size="1">Transportes 
        Aereos Pegaso</font></strong></font><font color="#009933" size="1"><br>
        <font face="Verdana, Arial, Helvetica, sans-serif">Santander 15 Piso 10, 
        Col. Insurgentes Mixcoac, C.P. 03920, Mexico City<br>
        </font><font size="2" face="Verdana, Arial, Helvetica, sans-serif"><font color="#009933"><font color="#009933"><font size="1">Phone</font><font size="1" face="Verdana, Arial, Helvetica, sans-serif">:(011.52) 
        555-563-1109 </font><font color="#009933" size="1" face="Verdana, Arial, Helvetica, sans-serif"> 
        &#8226; Fax:(011.52) 555-611-5376</font></font></font></font></font><font color="#006666" size="1" face="Verdana, Arial, Helvetica, sans-serif"></font><font color="#009933" size="2"><font face="Verdana, Arial, Helvetica, sans-serif"><br>
        </font></font><font color="#000000" size="2" face="Verdana, Arial, Helvetica, sans-serif"><br>
        <a href="mailto:virginiemirandol@tapsa.mx.com"><strong>virginiemirandol@tapsa.mx.com</strong></a></font></div></td>
  </tr>
  <tr> 
    <td height="5" bgcolor="#FFCC00">&nbsp;</td>
  </tr>
</table>
<?
 }else{ 
    //Estoy recibiendo el formulario, compongo el cuerpo 
    $cuerpo = "Formulario enviado\n"; 
    $cuerpo .= "Nombre: " . $HTTP_POST_VARS["nick"] . "\n"; 
    $cuerpo .= "Apellidos: " . $HTTP_POST_VARS["pre1"] . "\n"; 
    $cuerpo .= "Ocupación: " . $HTTP_POST_VARS["pre3"] . "\n"; 
    $cuerpo .= "Email: " . $HTTP_POST_VARS["pre4"] . "\n"; 
    $cuerpo .= "Comentarios: " . $HTTP_POST_VARS["pre5"] . "\n";
	
    //mando el correo... 
    mail("virginiemirandol@tapsa.mx.com","Contacto",$cuerpo);

    //doy las gracias por el envío 
    echo "<script> alert('¡Gracias por registrarte!.'); </script>"; 
	    echo "<script> location.href = \"/\"; </script>"; 

} 
?>
<p align="center"><br>
  <a href="#" onClick="cerrar()"> </a> </p>
</body>
 

</html>
