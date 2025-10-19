// Test Runner Script
const { exec } = require('child_process');

console.log('Running Flix Aura Backend Tests...\n');

// Run tests
exec('npm test', { cwd: __dirname + '/..' }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error running tests: ${error.message}`);
        return;
    }
    
    if (stderr) {
        console.error(`Test stderr: ${stderr}`);
    }
    
    console.log(`Test output:\n${stdout}`);
    
    // Check if tests passed
    if (stdout.includes('PASS')) {
        console.log('\n✅ All tests passed successfully!');
    } else if (stdout.includes('FAIL')) {
        console.log('\n❌ Some tests failed. Please check the output above.');
    } else {
        console.log('\n⚠️  Tests completed with no clear pass/fail indication.');
    }
});