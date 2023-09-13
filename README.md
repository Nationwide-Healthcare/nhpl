# NHPL Website

## Initial Setup

### Dependencies
To get started, you will need to install the following:
- Node: https://nodejs.org/en/download
- Git: https://git-scm.com/downloads

### Downloading Project Files
Open up a terminal (also known as command prompt or powershell) window in a directory of your choice and run the following:

`git clone https://github.com/Nationwide-Healthcare/nhpl`

This will download the project files into a folder called "nhpl" into the directory of your choice.

Navigate to this folder within termnal and run the following:

`npm install`

When that has completed run the following:

`npm run dev`

This wil run the project. If successful, you should be provided two blue links e.g. http://localhost:4321/ and one other. Visiting either of these two links in your browser should allow you to preview the website.

## Project Layout
The NHPL website folder is divided into sections with their own purpose:
- .vscode - Contains configuration settings for the text editor Visual Studio Code and can be ignored
- dist - Where the website code is built to when you choose to upload the website to the public
- node_modules - Contains files the code needs to run. This folder can be ignored.
- public - Where certain files we want the website to use exist. We want these files to be left untouched and as we placed them in this folder. This includes files such as fonts.
- src - Contains the majority of website files including pages, images and reusable components.
	- assets - Images that we want to use in the website. These images will be automatically compressed and optimised when we build the code.
	- components - Contains elements of the website which are reused in multiple places e.g.the header element at the top of the website exists on all pages. This allows us to write code once and reuse it in multiple places.
	- pages - Contains the pages for the website. Please note files and folders containing square brackets e.g. [practice] mean that this value can vary e.g. [practice]/contact.astro creates pages seven-dental/contact, abbeydale-road-family-dental-center/contact, etc....
	- data - This folder contains data used in the website e.g. practice information, treatment prices, team members, etc...


## Changing the Website
When changing the website, what you do depends on whether you are adding to the website or editing existing content.

### Editing Content
To edit data such as practice information, this can be simply found and changed within files such as src/data/practices.ts.

To edit text on a page, open the relevant page file within src/pages/ and edit the content within it e.g. to edit the check-ups page, you would edit the file src/pages/[practice]/treatments/check-ups.astro

### Adding Content
To add a page, simply create a file called pagename.astro and write your content in this page. By viewing other pages, you can see the style in which these pages are written. A general template for a new page is:

```

---
import Page from '../../components/Page.astro';
import Header from '../../components/layout/Header.astro';

---

<Page title="" description="" keywords="">
	<Header name="" />

	<Text>Hello</Text>
</Page>
```

Please note "" should be filled out with values in between the speech marks.

## Uploading Changes to Public View
To build the code so that it can be uploaded to the public website, please run the following in a terminal window in the nhpl directory:

`git add -A`

`git commit -m "details of your changes"`

`git push`
