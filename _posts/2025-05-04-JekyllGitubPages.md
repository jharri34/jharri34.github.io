---
layout: posts
title: Building a Portfolio
---

# Building a Portfolio with Jekyll, GitHub Pages, and Bootstrap

In this post, I’ll walk you through how I created this portfolio using Jekyll, GitHub Pages, Bootstrap 5, Sass/SCSS, and Ruby. If you’re looking to create a developer portfolio, this might be what you need.

---

##  Why Jekyll?

Jekyll is a static site generator with built-in support for GitHub Pages. Jekyll takes Markdown and HTML files and creates a complete static website based on your choice of layouts. Jekyll supports Liquid, a templating language that loads dynamic content on your site.

---

##  Prerequisites

Before we dive in, make sure you’ve got the following installed:

- **Ruby** (Use a guide to install it for your OS)
- **Bundler & Jekyll**:

    ```bash
    gem install jekyll bundler
    ```

---

## 🧪 Step-by-Step Setup

### 1. Create the Project Directory

```bash
mkdir portfolio
cd portfolio
```

Initialize it with a Gemfile:

```bash
bundle init
```

Open the Gemfile and add:

```ruby
gem "jekyll"
```

Then install the dependencies:

```bash
bundle install
```

Scaffold the Jekyll site:

```bash
bundle exec jekyll new . --force
```

This sets up the basic Jekyll structure. You’ll see folders like `_posts`, `_layouts`, `_includes`, `_sass`, and a `_config.yml` file.

---

### 2. Serve It Locally

```bash
bundle exec jekyll serve --livereload
```

Now head to [http://localhost:4000](http://localhost:4000) and see your "Hello World" take shape.

---

### 3. Add Bootstrap 5 & Sass

I integrated Bootstrap 5 for responsive design and Sass/SCSS for flexible theming.

Install Bootstrap via CDN or npm, or copy the compiled SCSS files into your `_sass` directory. Then import them into your main stylesheet:

```html
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="/assets/js/main.js"></script>
```

---

### 4. Customize Layouts and Pages

When building a portfolio website, it’s essential to start with a default layout. Think of this layout as the foundation your entire site sits on. It provides the consistent structure that every page will inherit, making your site easier to maintain and scale.

Here’s an example of a basic default layout:

```html
<!doctype html>
<html>
    { % include head.html %}
    <body class="bg-light">
        { % include header.html %}
        <main style="min-height: 125vh; padding-top: 200px;">
            {{ content }}
        </main>
        { % include footer.html %}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/main.js"></script>
    </body>
</html>
```

#### Why This Structure?

- **`head.html`**: Contains metadata, stylesheets (like Bootstrap), fonts, and other resources.
- **`header.html`**: Holds the navigation bar for consistent site-wide updates.
- **`footer.html`**: Contains social links, site information, or contact details.
- **`{ { content }}`**: Renders unique content for each page.

#### Example Front Matter:

```yaml
---
layout: default
title: About Me
---
```

Using includes to build reusable components has several advantages:

- **Modularity**: Changes in one place reflect site-wide.
- **Readability**: Logical parts make code easier to manage.
- **Scalability**: Extend or modify components without disrupting the whole site.

---

### 5. Set Up GitHub Actions for Deployment

#### Update GitHub Pages Source

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to **Pages** under the **Code and Automation** section.
4. Under **Build and Deployment > Source**, select **GitHub Actions**.

#### Create the GitHub Action

1. Click the **Actions** tab at the top of your repository.
2. Click **New Workflow**.
3. In the search bar, type “Jekyll”.
4. Select the one that just says **Jekyll** (not “GitHub Pages Jekyll”).
5. Click **Configure** to start with the default setup.

#### Commit the Workflow

Review the default workflow file GitHub generated for you. It typically builds your Jekyll site and prepares it for deployment. Click **Start Commit**, then **Commit new file** to save it to your repo.

---

### 6. Deploy to GitHub Pages

Create a repository named `username.github.io`, then push your code:

```bash
git init
git remote add origin https://github.com/username/username.github.io
git add .
git commit -m "Initial commit"
git push -u origin main
```

Your portfolio should now be live at:

👉 [https://username.github.io](https://username.github.io)

---


