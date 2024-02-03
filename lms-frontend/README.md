# LMS Frontend

### Setup instruction

1. Clone the project

```
  git clone https://github.com/har1nagle/lms-frontend.git

```

2. Move into the directory

```
  cd lms-frontend
  
```

3. install dependencies

```
  npm i
```

4. run the server

```
  npm run dev

```

### Setup instructions for tailwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/guides/vite)


1. Install tailwindCss

## Tailwind CLI

```
  cd lms-frontend
  npm install -D tailwindcss
```

2. Create tailwind config file

```
  npx tailwindcss init
```

3. Add filw extension to tailwind config file in the contents property

```
  "./src/**/*.{html,js,jsx,ts,tsx}
```

4. Add the tailwind directives at the top of the `index.css` file.

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

```
### Adding plugins and dependencies

```
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```









### 1 this is git in project update cmd

```
git init 

git commit -m "setting up plain vite project done"

git checkout -b baster

git remote add origin https://github.com/har1nagle/lms-frontend.git

```

### 1.1 this use for updated time 
```
git add . 

git commit -m "Added tailwind config"

git push origin baster

```