# HONK! Fest West - Website

The HFW website is a static page site hosted by [Github.com](https://github.com).
If you already know HTML and CSS, you have 90% of the tools required to update and maintain this site.
Other tools you'll need to know about are:

- [git](https://git-scm.com/) Version control (keeps a history of all modifications)
- [Jekyll](https://jekyllrb.com) Static site generator
- [Liquid](https://shopify.github.io/liquid/) HTML template language used by Jekyll
- [Bootstrap](https://getbootstrap.com/) CSS Framework used for the majority of the site
- [Sass](https://sass-lang.com/) CSS extensions to help write cleaner CSS

## Reasons for moving away from Wordpress

Wordpress is great if all you're doing is writing blog posts for a fully created website. But for the kinds of requests asked from the HFW website maintainer, Wordpress is maze of
unintuitive dropdown menus and unergonomic HTML/CSS editors. Try to figure out how to change the main
HONK! logo in the Wordpress header! I double-dare ya!! Since knowlege of HTML/CSS is already required, it was
decided to get rid of the Wordpress rope-pushing way of doing things and go straight to the source. Plus, since the site is just static files, HFW is now super fast!
<br/><br/>
If it is ever required to go back to the old Wordpress site (not recommended), a simple change to the
DNS records on Dreamhost will revert back to the pre-2019 website hosted by Wordpress. [See instructions
at the bottom](#reverting-back-to-wordpress).

## Local Installation

1. Install [Ruby >= 2.2.5](https://www.ruby-lang.org/en/downloads/)
2. Install [git](https://git-scm.com/downloads)
3. Clone this repository

   ```
   git clone https://github.com/honk-fest-west/hfw-website.git
   ```

4. Change directory to `hfw-website`
5. Install dependencies
   ```
   bundle install
   ```
6. Start the jekyll server

   ```
   bundle exec jekyll serve
   ```

7. Open your browser to `http://localhost:4000`

## Updating www.honkfestwest.org

Updating the live website is as simple a making a change on your local version of the site, commiting changes with git, and pushing them to github.com. Let's say you want to add a new post on the front page for the 2030 HONK! Fest West Spring fund raiser:

1. Open the `hfw-website/index.html` file in your favorite HTML editor.
2. Add a new contrast-container in the #index-page container.

   ```
   <div class="contrast-container">
     <h2 class="ft-fml-1 ft-bdr-1">
       <span class="ft-clr-1 ">Winter Warmup</span>
       <span class="text-muted">A Benefit for HONK! Fest West</span>
     </h2>
     <div class="row">
       <div class="col-md-4">
         <a
           target="_blank"
           href="https://www.facebook.com/events/385666322256290/"
         >
           <img
             class="img-link img-fluid"
             src="{{
               '/assets/images/events/11x17_WinterWarmUpFinal.jpg' | relative_url
             }}"
           />
         </a>
       </div>
       <div class="col-md-8">
         <p>
           <b>Feb 2nd - 8:30pm - Substation 645 NW 45th St, Seattle, WA 98107</b>
           <br /><br />
           Come warm up your cold bones to some spicy sounds from some of your
           favorite bands. <br /><br />
           <a href="https://www.actionesse.com/" target="_blank">Actionesse</a>
           <br />
           <a href="https://neonbrassparty.com/" target="_blank"
             >Neon Brass Party</a
           >
           <br />
           <a href="https://tenmanbrass.bandcamp.com/">Ten Man Brass Band</a>
           <br /><br />
           $10 <br />
           21+ <br />
           Doors at 8:30 pm <br />
           All proceeds go toward Honk! Fest West 2019: Seattle's free, 3-day
           street band festival!
         </p>
       </div>
     </div>
   </div>
   ```

3. Save the `hfw-website/index.html` file.
4. Preview your changes by starting the jekyll server in the hfw-website directory.

   ```
   jekyll serve
   ```

5. and open your browser to `http://localhost:4000`
6. When satisfied, commit your changes with git.

   ```
   git commit -am "Add Spring Fundraiser to front page"
   ```

7. Push the updates to the master branch on github.

   ```
   git push origin master
   ```

## Reverting Back to Wordpress

So you want to revert back to Wordpress? Good luck. I wish you well in your endevours. No hard feelings.

1. Log into the HONK! Fest West account on dreamhost.com.
2. Click on **Manage Domains** in the left hand menu column.
3. Under the **WEB HOSTING** column, in the **honkfestwest.org** row, click on the **Edit** button.
4. Look for the **Fully host this domain** button and click it.
