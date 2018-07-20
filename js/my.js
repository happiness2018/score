  $(document).ready(function(){
    // References:
    var $form1 = $('#myForm1');
    var $form2 = $('#myForm2');
    var $form3 = $('#myForm3');
    var $conf = $('#myConf');
    var $subm1 = $('#mySubmit1');
    var $subm2 = $('#mySubmit2');
    var $subm3 = $('#mySubmit3');
    //var $impt = $form.find(':input').not(':button, :submit, :reset, :hidden');
 // Submit function:
    $form1.submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(response){
      // On success, clear all inputs;
      //    $impt.val('').attr('value','').removeAttr('checked').removeAttr('selected');
   // Write a confirmation message:
            $conf.html("Merci, n'oubliez pas de revenir ici 2 fois par jour, le matin en arrivant au lab et le soir avant de rentrer chez vous");
            //$conf.append("<a href='https://goo.gl/69khDp' target='_blank'> Questionnaire </a>");
   // Disable the submit button:
          $subm1.prop('disabled', true);
          $subm2.prop('disabled', true);
          $subm3.prop('disabled', true);
        },'json');
        return false;
    });
    $form2.submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(response){
      // On success, clear all inputs;
      //    $impt.val('').attr('value','').removeAttr('checked').removeAttr('selected');
   // Write a confirmation message:
            $conf.html("Merci, n'oubliez pas de revenir ici 2 fois par jour, le matin en arrivant au lab et le soir avant de rentrer chez vous");
            //$conf.append("<a href='https://goo.gl/69khDp' target='_blank'> Questionnaire </a>");
               // Disable the submit button:
          $subm1.prop('disabled', true);
          $subm2.prop('disabled', true);
          $subm3.prop('disabled', true);
        },'json');
        return false;
    });
    $form3.submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(response){
      // On success, clear all inputs;
      //    $impt.val('').attr('value','').removeAttr('checked').removeAttr('selected');
   // Write a confirmation message:
            $conf.html("Merci, n'oubliez pas de revenir ici 2 fois par jour, le matin en arrivant au lab et le soir avant de rentrer chez vous");
            //$conf.append("<a href='https://goo.gl/69khDp' target='_blank'> Questionnaire </a>");
               // Disable the submit button:
          $subm1.prop('disabled', true);
          $subm2.prop('disabled', true);
          $subm3.prop('disabled', true);
        },'json');
        return false;
    });
});
