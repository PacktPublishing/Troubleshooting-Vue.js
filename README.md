# Troubleshooting-Vue.js
Troubleshooting Vue.js, published by Packt

# Troubleshooting-Vue.js
This is the code repository for <a href="https://www.packtpub.com/application-development/troubleshooting-vuejs-video">Troubleshooting Vue.js</a>, published by <a href="https://www.packtpub.com/">Packt</a>. It contains all the supporting project files necessary to work through the video course from start to finish.

# Description
Do you know what to do if your Vue application goes blank? What if the view does not update when something changes in the model? Or what if the view fails to respond to a route change? Whenever you have a problem with your Vue application, don't panic! There are many different things that could cause a problem with your Vue application. Some common issues center around templates, components, forms, lists, routing, and performance. No matter what's causing the issue, there are many basic troubleshooting techniques you can use to fix issues such as these. 

Troubleshooting is a process of trial and error—in some cases, you may need to use several different approaches before you can find a solution. Some problems may be easy to fix while others are impossible to resolve at all. This course highlights some common problems faced by developers in different stages of their Vue application development and shows you some simple and practical methods to try when troubleshooting, as well as how to solve more difficult problems you may encounter.

# What You Will Learn
- Learn some common techniques to troubleshoot a Vue application
- Understand what the Error object is telling you
- Understand and proper use of Vue directives in a template
- Learn how changes to a list is not reactive and how to overcome such pitfall
- Learn to optimize and organize components to improve performance
- Learn the advantages of Vue’s Single-File Component (SFC) and separation of concerns (SOC)
- Know when to use render functions over a bloated template
- Learn common mistakes that Vue.js developers make
- Know why some elements don’t show up
- Understand Vue’s reactivity system to prevent unwanted update side effects
- Learn to use the 8 lifecycle hooks for testing and debugging
- Know and understand the restrictions between components and elements
- Correct common routing issues

# Requirements
A good understanding of Web development (HTML, CSS, JavaScript) and a basic knowledge of Vue.js frameworks, the Object-Oriented Programming (OOP) paradigm, and Model-View-Controller (MVC) or the Model-View-View-Model (MVVM) architecture is expected.

# Installation Instructions
The source files do not include the <b>node_modules</b>.  Once a project is created using the Vue CLI, the <b>node_modules</b> will be created.

Using the Vue CLI 2.x to create a Vue project
<pre>
vue init webpack TroubleshootVue
vue init webpack unit-test
</pre>

Using the Vue CLI 3.x to create a Vue project
<pre>
vue create TroubleshootVue
vue create unit-test
</pre>

After a project is created, swap the "<b>src</b>" folder/content with the "<b>src</b>" folder/content from each section.

Except for <b>Section 1.1</b> and <b>Section 1.2</b>, each section has a <b>Section x.y.Start</b> and <b>Section x.y.End</b> folder (where x = section number, y = subsection number.  Example:  <b>Section 1.3.Start</b>, <b>Section 1.3.End</b>).  The <b>Section x.y.Start</b> contains all the files in the state before the video starts and <b>Section x.y.End</b> contains all the files in the state after the video ends.

# Minimum Hardware Requirements
For successful completion of this course, students will require the computer systems with at least the
following:
- OS: Any (Windows 7, 8, 10 or Mac OS or Linux distro)
- Processor: 1 GHz Processor or faster
- Memory: 1 GB RAM
- Storage: ~10 GB

# Recommended Hardware Requirements
For an optimal experience with hands-on labs and other practical activities, we recommend the following
configuration:
- OS: Any (Windows 7, 8, 10 or Mac OS or Linux distro)
- Processor: 1.6 GHz Processor or faster
- Memory: 2 GB RAM
- Storage: ~20 GB

# Software Requirements
- Operating system: Windows 7, 8, 10 or Mac OS or Linux distro
- Browser: Google Chrome
- Code Editor: Sublime, Brackets, Atom, WebStorm, Visual Studio Code
- Others: Node.js LTS 8.x, npm 5.x or above, Vue CLI 2.x or 3.x, Webpack

# Links For Required Software Downloads
- Vue.js https://vuejs.org/v2/guide/installation.html
- Node.js https://nodejs.org/en/
- Webpack: https://webpack.js.org/
- npm: https://www.npmjs.com/
