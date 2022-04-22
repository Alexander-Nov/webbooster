<?

if(isset($_POST["name"]))
{
        if(isset($_POST["name"]))
        {
          $name = $_POST["name"];
        }
        if(isset($_POST["tel"]))
        {
          $phone= $_POST["tel"];
        }
        if(isset($_POST["goodName"]))
        {
          $body = $_POST["goodName"];
        }

        if($name=="" or $tel=="" or $goodName=="")
        {
          echo "Пожалуйста, заполните все поля";
        }
        else
        {
          $to = "sn.mail@mail.ru";
          $subject = "Новый заказ";
          $headers .= "Content-Type: text/html;";
          $headers .= "Отправитель: Посетитель сайта";
          $message = "
            Имя: $name<br>
            Телефон: $tel<br>
            Товар: $goodName<br><br>
            ";
          $send = mail($to, $subject, $message, $headers);
            if ($send == "true")
            {
              echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.";
            }
            else
            {
              echo "Не удалось отправить, попробуйте снова!";
            }
        }
}

?>
