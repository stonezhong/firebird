import os
from setuptools import setup, find_packages

# The directory containing this file
HERE = os.path.dirname(os.path.abspath(__file__))

# The text of the README file
with open(os.path.join(HERE, "README.md"), "r") as f:
    README = f.read()

# This call to setup() does all the work
setup(
    name="firebird",
    version="0.0.1",
    description="Streaming Data Processing Framework",
    long_description=README,
    long_description_content_type="text/markdown",
    url="https://github.com/stonezhong/firebird",
    author="Stone Zhong",
    author_email="stonezhong@hotmail.com",
    license="MIT",
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
    ],
    package_dir = {'': 'src'},
    packages=find_packages(where='src'),
    install_requires=["pika", "kazoo", "docker", "paramiko"],
    entry_points={
        "console_scripts": [
            "firebird=firebird.cmd_tools.firebird:main",
        ]
    },
)