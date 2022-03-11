# Setup a Project with Vue3 CLI and TailwindCSS 🚸
Getting started to something a bit more serious and professional, this time trying to setup a project in Vue3 with the CSS framework Tailwind.

## Environment setup 🎇
- First thing to do is to install on our system Vue3 CLI version by running this command:
```
npm install -g @vue/cli
```
- Right after that we can check if everything went well by running this command:
```
vue --version
```
## Create the Vue3 CLI project 🏙️
```
vue create 'projectName'
```
- Just after that this will appear, here you can select which version of Vue you want to use 
![Choose](https://i.ibb.co/jhqf4rT/Capture.png)
- After that you can choose the package you want to install along Vue3 CLI, in my case in need only Vue and Babel 
![Linter](https://i.ibb.co/M2sSy6v/choose.png)
- Choose again the version that you need to use, in my case 3.x 
![version3](https://i.ibb.co/j8XH7CT/vue3.png)
- Choose where to place config setting for some packages, in my case in dedicated config files 
![dedicated](https://i.ibb.co/344LNkx/dedicated.png)
- You can choose to save this as preset for the future project, in my case i don't want to 
![preset](https://i.ibb.co/KG8WS8z/preset.png)

## Install TailwindCSS 🎐
- Now it's the turn of TailwindCSS, luckly we just need to type in:
```
vue add tailwind
```
as type of installation i choose *minimal*
- et voilà! everything should be ready and good to go!! type in this:

## Compile and hot-reloads for the development ♨️
```
npm run serve
```
## Compile and minifies for production 🥧
```
npm run build
```

## Usefull Links 🔗
- [Vue 3 documentation](https://vuejs.org/guide/components/registration.html)
- [This](https://www.kreaweb.be/laragon-add-postgresql/) is where to find the instructions to setup the DB
- Also usefull a [Vue CLI Guide](https://cli.vuejs.org/guide/)
- [Here](https://cli.vuejs.org/guide/installation.html) how to check if Vue is installed and Up to date
- See [Configuration Reference](https://cli.vuejs.org/config/)