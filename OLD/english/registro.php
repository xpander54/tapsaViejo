<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> 
<html> 
<head> 
    <title>..:: Nuditel S.A. de C.v. - Registro ::..</title> 
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
	color: "#FFFFFF";
	font-weight: bold;
}
-->
</style>
</head> 
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #000000;
}
.Estilo2 {
	color: #FFFFFF;
	font-weight: bold;
}
.Estilo3 {
	color: #FFFFFF;
	font-style: italic;
}
.Estilo6 {color: #FFFFFF}
.Estilo7 {color: #FFFFFF}
.Estilo8 {color: #FFFFFF}
-->
</style>
 <script>
function revisar() {
if(formulario.nick.value.length < 3) { alert('El Nombre debe contener por lo mínimo 3 caractéres') ; return false ; }
if(formulario.pre1.value.length < 0) { alert('Tus Apellidos no son tan cortos') ; return false ; }
if(formulario.pre2.value.length == 0) { alert('Tu Correo no es tan corto') ; return false ; }
if(formulario.pre3.value.length == 0) { alert('Tu Fecha de nacimiento esta mal escrita') ; return false ; }
if(formulario.pre4.value.length == 0) { alert('Tu Ocupacion Falta') ; return false ; }
if(formulario.pre5.value.length == 0) { alert('¿Opiniones y Comentarios?') ; return false ; }
}
</script>
</head>

<body bgcolor="#FFFFFF">
<? 
if (!$HTTP_POST_VARS){ 
?>
<table width="600" height="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr> 
    <td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="600" height="120">
        <param name="movie" value="registro/banner-registro.swf">
        <param name="quality" value="high">
        <embed src="registro/banner-registro.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="600" height="120"></embed></object></td>
  </tr>
  <tr> 
    <td height="103" valign="middle"> <p align="center" class="Estilo2"><font color="#FF0000" size="4" face="Arial, Helvetica, sans-serif">&iexcl;REG&Iacute;STRATE!</font></p>
      <p align="center" class="Estilo2"><font color="#333333" size="2" face="Arial, Helvetica, sans-serif">Y 
        recibe toda la informaci&oacute;n sobre nuestros estrenos, horarios, promociones 
        y pr&oacute;ximas pel&iacute;culas. Adem&aacute;s podr&aacute;s ganar 
        obsequios e invitaciones especiales de Contempo Cinema.</font></p></td>
  </tr>
  <tr> 
    <td valign="middle" bgcolor="#CC3300"> 
      <center>
      </center>
      <form name="formulario" action="http://www.contempocinema.com/registro/registro.php" method=post onsubmit="return revisar()">
        <table width="463"  border="0" align="center" cellpadding="0" cellspacing="0">
          <tr valign="middle" bgcolor="#CC3300"> 
            <td width="163" height="29"><font color="#000000" size="2" face="Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"> 
              <strong>Nombre: </strong> </span></font></td>
            <td width="300"> <font color="#333333"> 
              <input type="text" name="nick" maxlength="20" class="form" >
              </font></td>
          </tr>
          <tr valign="middle" bgcolor="#CC3300"> 
            <td height="29"><font color="#000000" size="2" face="Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Apellidos: 
              </strong></span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre1" maxlength="200" class="form">
              </font></td>
          </tr>
          <tr valign="middle" bgcolor="#CC3300"> 
            <td height="29"><font color="#000000" size="2" face="Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Ocupaci&oacute;n:</strong></span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre3" maxlength="20" class="form" >
              </font></td>
          </tr>
          <tr valign="middle" bgcolor="#CC3300"> 
            <td height="29"><font color="#000000" size="2" face="Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Email: 
              </strong></span></font></td>
            <td> <font color="#333333"> 
              <input type="text" name="pre4" maxlength="200" class="form" >
              </font></td>
          </tr>
          <tr valign="middle" bgcolor="#CC3300"> 
            <td height="29"><font color="#000000" size="2" face="Arial, Helvetica, sans-serif"><span class="Estilo4 Estilo8"><strong>Comentarios: 
              </strong></span></font></td>
            <td><font color="#333333"> 
              <textarea name="pre5" cols=32 rows=6></textarea>
              </font></td>
          </tr>
          <tr align="center" bgcolor="#CC3300"> 
            <td height="29" colspan="2"><font color="#333333"> 
              <input name="submit" type=submit value="Enviar">
              </font></td>
          </tr>
        </table>
      </form></td>
  </tr>
</table>
<?
 }else{ 
    //Estoy recibiendo el formulario, compongo el cuerpo 
    $cuerpo = "Formulario enviado\n"; 
    $cuerpo .= "Nombre: " . $HTTP_POST_VARS["nick"] . "\n"; 
    $cuerpo .= "Apellidos: " . $HTTP_POST_VARS["pre1"] . "\n"; 
    $cuerpo .= "Fecha Nacimiento: " . $HTTP_POST_VARS["pre2"] . "\n"; 
    $cuerpo .= "Ocupación: " . $HTTP_POST_VARS["pre3"] . "\n"; 
    $cuerpo .= "Email: " . $HTTP_POST_VARS["pre4"] . "\n"; 
    $cuerpo .= "Comentarios: " . $HTTP_POST_VARS["pre5"] . "\n";
	
    //mando el correo... 
    mail("info.nuditel@nuditel.com.mx","Contacto Nuditel",$cuerpo);

    //doy las gracias por el envío 
    echo "<script> alert('¡Gracias por registrarte!.'); </script>"; 
	    echo "<script> location.href = \"/\"; </script>"; 

} 
?>
<p align="center"><br>
  <a href="#" onClick="cerrar()"> </a> </p>
</body>
 

</html>
