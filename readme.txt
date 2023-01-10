all important notes:

- to passing return data (should mostly be dict) from python to js, always to serialize the value in json first in the function return statement

- to trigger js code to call a specific python function, you must use print() to specify WHICH FUNCTION in the target python file CAN BE CALLED (VERY IMORTANT)

    - this is because the linkage between python and js file is through "new PythonShell('./python/main.py')" which only specify on the python file level

- It's generally not recommended to commit the virtual environment (venv) folder to GitHub because the contents of the venv folder are specific to your local machine

    - Additionally, the venv folder can be quite large, which can add unnecessary clutter and increase the size of your repository.

- Instead, it's best practice to use a tool like pipenv or poetry to manage your dependencies and create a "requirements.txt" file

    - which lists all of the packages that your project depends on. You can then commit this file to GitHub and others can use it to recreate the same environment on their own machines.
    (very important)