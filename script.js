document.addEventListener("DOMContentLoaded", function () {

  function getValue(id) {
    return parseFloat(document.getElementById(id).value);
  }

  function showResult(id, message) {
    document.getElementById(id).textContent = message;
  }

  function basicOperation(type) {
    const n1 = getValue("num1");
    const n2 = getValue("num2");

    if (isNaN(n1) || isNaN(n2)) {
      showResult("basicResult", "Enter valid numbers.");
      return;
    }

    let result;
    if (type === "add") result = n1 + n2;
    else if (type === "subtract") result = n1 - n2;
    else if (type === "multiply") result = n1 * n2;
    else if (type === "divide") result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    else if (type === "modulus") result = n2 !== 0 ? n1 % n2 : "Cannot mod by zero";

    showResult("basicResult", `Result: ${result}`);
  }

  document.getElementById("addBtn").onclick = () => basicOperation("add");
  document.getElementById("subtractBtn").onclick = () => basicOperation("subtract");
  document.getElementById("multiplyBtn").onclick = () => basicOperation("multiply");
  document.getElementById("divideBtn").onclick = () => basicOperation("divide");
  document.getElementById("modulusBtn").onclick = () => basicOperation("modulus");

  function calculate(ids, resultId, formula) {
    const values = ids.map(id => getValue(id));
    if (values.some(v => isNaN(v))) {
      showResult(resultId, "Invalid input.");
      return;
    }
    showResult(resultId, formula(...values));
  }

  document.getElementById("rectBtn").onclick = () => calculate(["rectLength","rectWidth"], "rectResult", (L,W)=>`Area = ${L*W}`);
  document.getElementById("circleBtn").onclick = () => calculate(["circleRadius"], "circleResult", r=>`Area = ${(Math.PI*r*r).toFixed(2)}`);
  document.getElementById("pythagoreanBtn").onclick = () => calculate(["sideA","sideB"], "pythagoreanResult", (a,b)=>`Hypotenuse = ${Math.sqrt(a*a+b*b).toFixed(2)}`);
  document.getElementById("interestBtn").onclick = () => calculate(["principal","rate","time"], "interestResult", (P,R,T)=>`Interest = ${(P*R*T)/100}`);
  document.getElementById("powerBtn").onclick = () => calculate(["base","exponent"], "powerResult", (b,e)=>`${b}^${e} = ${b**e}`);
  document.getElementById("perimeterBtn").onclick = () => calculate(["periLength","periWidth"], "perimeterResult", (L,W)=>`Perimeter = ${2*(L+W)}`);
  document.getElementById("circumferenceBtn").onclick = () => calculate(["circRadius"], "circumferenceResult", r=>`Circumference = ${(2*Math.PI*r).toFixed(2)}`);
  document.getElementById("triangleBtn").onclick = () => calculate(["triangleBase","triangleHeight"], "triangleAreaResult", (b,h)=>`Area = ${0.5*b*h}`);
  document.getElementById("cubeBtn").onclick = () => calculate(["cubeSide"], "cubeVolumeResult", s=>`Volume = ${s**3}`);
  document.getElementById("prismBtn").onclick = () => calculate(["prismLength","prismWidth","prismHeight"], "prismVolumeResult", (L,W,H)=>`Volume = ${L*W*H}`);
  document.getElementById("cylinderBtn").onclick = () => calculate(["cylRadius","cylHeight"], "cylinderVolumeResult", (r,h)=>`Volume = ${(Math.PI*r*r*h).toFixed(2)}`);
  document.getElementById("speedBtn").onclick = () => calculate(["distance","time"], "speedResult", (d,t)=> t!==0?`Speed = ${d/t}`:"Time cannot be zero");
  document.getElementById("densityBtn").onclick = () => calculate(["mass","volume"], "densityResult", (m,v)=> v!==0?`Density = ${m/v}`:"Volume cannot be zero");
  document.getElementById("bmiBtn").onclick = () => calculate(["weight","height"], "bmiResult", (w,h)=> h!==0?`BMI = ${(w/(h*h)).toFixed(2)}`:"Height cannot be zero");
  document.getElementById("discriminantBtn").onclick = () => calculate(["a","b","c"], "discriminantResult", (A,B,C)=>`Discriminant = ${B*B-4*A*C}`);

});
//complete