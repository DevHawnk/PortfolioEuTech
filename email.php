<?php

if (isset($_POST['email']) && !empty($_POST['email'])){

$name = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$message = addslashes($_POST['message']);

$to = 'wsp.office1@gmail.gmail.com'; // Substitua pelo seu endereço de e-mail
$subject = 'Contato - Portifolio';
$body = "Nome:".$name. "\r\n". 
        "Email: " .$email. "\r\n".
        "Mensagem:".$mensagem;

$header = "from:wsp.office1@gmail.com". "\r\n".
          "reply-to:".$email."\e\n"
          ."X=mailer:PHP/".phpversion();

if(mail($to, $subject, $body, $header)){
      echo("Email enviado com sucesso!")
}else{
  echo("O Email não pode ser enviado!");
}

}
?>