document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('term').value);
    const months = years * 12;
    const monthlyRate = annualRate / 12;

    // Calculate monthly payment
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = numerator / denominator;

    // Calculate total interest and total paid
    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - principal;

    // Display results
    document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `$${totalInterest.toFixed(2)}`;
    document.getElementById('totalPaid').textContent = `$${totalPaid.toFixed(2)}`;
});