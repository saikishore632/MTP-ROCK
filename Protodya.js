function calcBMI () {
    // (A) Get elements
    let bmi = null,
        
        weight = parseFloat(document.getElementById("bmi-weight").value),
        volume = parseFloat(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");
   
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    
    bmi = weight * 20/ (volume);
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
   
    // (C) Show Results
    
      results.innerHTML = " Protodya konov strength index is - " + bmi ;
     
      return false;
  }