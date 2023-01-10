import { PythonShell } from 'python-shell';

const pyshell1 = new PythonShell('./python/main.py');

pyshell1.on('message', function (message) {
  const obj1 = JSON.parse(message);
  console.log(obj1.first_key);
});

// end the input stream and allow the process to exit (this part of the code is must needed)
pyshell1.end(function (err, code, signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});
