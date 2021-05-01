function calcBMI () {
    // (A) Get elements
    let bmi = null,
        
        weight = parseFloat(document.getElementById("bmi-weight").value),
        volume = parseFloat(document.getElementById("bmi-height").value),
        volume1= parseFloat(document.getElementById("bmi-height1").value),
        results = document.getElementById("bmi-results");
   
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    
    bmi = (weight - volume) / (volume1);
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
   
    // (C) Show Results
    
      results.innerHTML = " Abrasivity of Rock is - " + bmi + " g/cm";
     
      return false;
  }