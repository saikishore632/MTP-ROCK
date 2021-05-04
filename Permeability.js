function calcBMI () {
    // (A) Get elements
    
    let bmi,bmi1,bmi2,bmi3 = null,
    
        
        weight = parseFloat(document.getElementById("bmi-weight").value),
        volume = parseFloat(document.getElementById("bmi-height").value),
        weight0 = parseFloat(document.getElementById("bmi-weight0").value),
        volume0 = parseFloat(document.getElementById("bmi-height0").value),

        weight1 = parseFloat(document.getElementById("bmi-weight1").value),
        volume1 = parseFloat(document.getElementById("bmi-height1").value),
        weight11 = parseFloat(document.getElementById("bmi-weight11").value),
        volume11 = parseFloat(document.getElementById("bmi-height11").value),

        weight2 = parseFloat(document.getElementById("bmi-weight2").value),
        volume2 = parseFloat(document.getElementById("bmi-height2").value),
        weight12 = parseFloat(document.getElementById("bmi-weight12").value),
        volume12 = parseFloat(document.getElementById("bmi-height12").value),

        results = document.getElementById("bmi-results");
   
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    
    bmi1 = weight * volume/ (volume0 * weight0);
    bmi2 = weight1 * volume1/ (volume11 * weight11);
    bmi3 = weight2 * volume2/ (volume12 * weight12);
    // Round off
    bmi = (bmi1+bmi2+bmi3)/3;
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
   
    // (C) Show Results
    
      results.innerHTML = " Coefficient of permeability is - " + bmi ;
     
      return false;
  }
