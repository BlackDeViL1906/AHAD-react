import './home.css';

const Homepage = ()=>
{
    return(
        <>
<div className="wrapper" id="wrapper">
  <header>
    <div className="banner row" id="banner">		
      <div className="parallax text-center" style={{backgroundImage: 'url(http://wowthemes.net/demo/leroy/img/dummy1.jpg)'}}>
        <div className="parallax-pattern-overlay">
          <div className="container text-center" style={{height: 600, paddingTop: 170}}>
            <a href="#"><img id="site-title" className=" wow fadeInDown" wow-data-delay="0.0s" wow-data-duration="0.9s" /></a>
            <h2 className="intro wow zoomIn" wow-data-delay="0.4s" wow-data-duration="0.9s">AHAD - Event Management</h2>
          </div>
        </div>
      </div>
    </div>	
    <div className="menu">
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navwrapper">
            <div className="navbar navbar-inverse navbar-static-top">
              <div className="container">
                <div className="navArea">
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="menuItem active"><a href="#wrapper">Home</a></li>
                      <li className="menuItem"><a href="#aboutus">About us</a></li>
                      <li className="menuItem"><a href="#specialties">Our Events</a></li>
                      <li className="menuItem"><a href="#gallery">Event Gallery</a></li>
                      <li className="menuItem"><a href="#feedback">Review</a></li>
                      <li className="menuItem"><a href="#contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	
  </header>
  <section className="aboutus" id="aboutus">
    <div className="container">
      <div className="heading text-center">
        <img className="dividerline"/>
        <h2>About AHAD</h2>
        <img className="dividerline" />
        <h3>Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable.!</h3>
      </div>			
      <div className="row">
        <div className="col-md-6">
          <div className="papers text-center">
            <img src="https://media.marketrealist.com/brand-img/XEVqF9Chi/1200x628/is-elon-musk-firing-parag-agrawal-1666975071805.jpg" alt/><br />
            <h4 className="notopmarg nobotmarg">John Vandeley<br></br>CEO of AHAD MANAGEMENT</h4>
            <p>
              Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable. The time signature in sheet music visually depicts a song's rhythm, while for us, the lines of the baseline grid depict the rhythm of our content and give us guidelines.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="papers text-center">
            <img src="https://i.insider.com/5daf3126cc4a0a12366fb3a4?width=1136&format=jpeg" alt /><br />
            <h4 className="notopmarg nobotmarg">Stephina<br></br>MANAGER of AHAD</h4>
            <p>
              Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable. The time signature in sheet music visually depicts a song's rhythm, while for us, the lines of the baseline grid depict the rhythm of our content and give us guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="specialties" id="specialties">
    <div className="container">
      <div className="heading text-center">
        <img className="dividerline" />
        <h2>Our Events</h2>
        <img className="dividerline" />
        <h3>Event management is a process of planning and organizing various events such as (ceremony, birthdays, weddings, charitable events, concerts, parties). Event management means doing various tasks at a time and making sure that each and everything is in place. It’s not rocket science to make an event successful. It is the coordination, running and handling all the people around. </h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="restmenuwrap">
            <h3 className="maincat notopmarg text-center">SOCIAL GATHERING</h3>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://www.warwickrittenhouse.com/img/slides/330.jpg)'}}>
              </div>
              <h5>CONFERENCE</h5>
              <p>
                Conferences are used to bring together people with common interests and discuss issues and ideas.
              </p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/004/413/153/small/outlined-icon-of-group-of-people-doing-discussion-suitable-for-design-element-of-teamwork-discussion-social-networking-and-business-forum-free-vector.jpg)'}}>
              </div>
              <h5>DEBATE</h5>
              <p>
                You don't win a debate by suppressing discussion; you win it with a better argument						</p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://4.imimg.com/data4/TU/GV/MY-20979260/events-500x500.jpg)'}}>
              </div>
              <h5>EXHIBITION</h5>
              <p>
                The purpose of our lives is to be happy.						</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="restmenuwrap">
            <h3 className="maincat notopmarg text-center">PARTY DECORATIONS</h3>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://cdn.dribbble.com/userupload/3255352/file/original-7836aec6a11a6ebd429eb411d4a90c88.jpg?resize=400x0)'}}>
              </div>
              <h5>BIRTHDAY PARTY</h5>
              <p>
                Birthdays are the best days! Wouldn't you agree?
              </p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://thumbs.dreamstime.com/b/wedding-stage-decorated-more-flower-heart-shape-wedding-stage-decoration-179703300.jpg)'}}>
              </div>
              <h5>WEDDING</h5>
              <p>
                “Wishing you joy, love, and happiness on your wedding day.”
              </p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(https://i.pinimg.com/736x/c1/10/77/c110778c1068a415b232d10d3f30ad35--farewell-card-farewell-gifts.jpg)'}}>
              </div>
              <h5>FAREWELL</h5>
              <p>
                Thank you for everything that you’ve accomplished so far, and good luck to everything you will in the future</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="restmenuwrap">
            <h3 className="maincat notopmarg text-center">OUR PROVIDINGS</h3>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(http://wowthemes.net/demo/leroy/img/dummies/7.jpg)'}}>
              </div>
              <h5>FOOD</h5>
              <p>
                I know once people get connected to real food, they never change back.
              </p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(http://wowthemes.net/demo/leroy/img/dummies/8.jpg)'}}>
              </div>
              <h5>DESSERTS</h5>
              <p>
                Pepperoni,mozzarella cheese and Italian seasonings are rolled together,baked to delicious perfection.
              </p>
            </div>
            <div className="restitem clearfix">
              <div className="rm-thumb" style={{backgroundImage: 'url(http://wowthemes.net/demo/leroy/img/dummies/9.jpg)'}}>
              </div>
              <h5>DRINKS</h5>
              <p>
                Sippin' and chillin'
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="gallery" id="gallery">
    <div className="container">
      <div className="heading text-center">
        <img className="dividerline" />
        <h2>Events Gallery</h2>
        <img className="dividerline" />
      </div>
      <div id="grid-gallery" className="grid-gallery">
        <section className="grid-wrap">
          <ul className="grid">
            <li className="grid-sizer" />{/* for Masonry column width */}				
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7e2BsXvr5d8keLvqmUfkDg_N8ac6alFWyg&usqp=CAU" />
                <figcaption><h3>BIRTHDAY PARTIES</h3><p> 
                    Hold on to your inner child as you grow older. </p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qah_l81ghjqTZEQm8EKfdOSBDZJvgURNBBA6QYVQ2l8ze0oj89OrdMDDl1Ekc9Fs6TE&usqp=CAU" />
                <figcaption><h3>FARAWELL</h3><p>Farewell! God knows when we shall meet again.</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde0RgaKJywoERFYe347ORdws0MZ950z0J6w&usqp=CAU" alt />
                <figcaption><h3>WEDDING CEREMONY</h3><p>"If you are with the right person, it brings out the best version of you."
                  </p></figcaption></figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8W8JAWgmhBhs1CK42hx7rp_xkGBpYgsLUw&usqp=CAU" alt />
                <figcaption><h3>FLASHMOB</h3><p>Put your hands up. Everybody just dance up. We came to party rock</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://i.ytimg.com/vi/xHnJkizo6m8/maxresdefault.jpg" alt />
                <figcaption><h3>LOVE PROPOSAL</h3><p>It's enough for me to be sure that you and I exist at this moment.</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xh3-2vCX8z6aoy9yVyX_t4tO4Zyc3H9xGw&usqp=CAU" alt />
                <figcaption><h3>BABY SHOWER</h3><p>Your family is about to get even cuter</p></figcaption>
              </figure>
            </li>
            <li>
            </li>
            <li>
              <figure>
                <img src="http://wowthemes.net/demo/leroy/img/dummies/17.jpg" alt />
                <figcaption><h3>CONFERENCE</h3><p>Be so good they can’t ignore you</p></figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className="slideshow">
          <ul>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7e2BsXvr5d8keLvqmUfkDg_N8ac6alFWyg&usqp=CAU" />
                <figcaption><h3>BIRTHDAY PARTIES</h3><p>
                    Hold on to your inner child as you grow older. </p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qah_l81ghjqTZEQm8EKfdOSBDZJvgURNBBA6QYVQ2l8ze0oj89OrdMDDl1Ekc9Fs6TE&usqp=CAU" />
                <figcaption><h3>FAREWELL</h3><p>Farewell! God knows when we shall meet again.</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde0RgaKJywoERFYe347ORdws0MZ950z0J6w&usqp=CAU" alt />
                <figcaption><h3>WEDDING CEREMONY</h3><p>"If you are with the right person, it brings out the best version of you."
                  </p></figcaption></figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgk6kdKM0IpbI9eUB0iaZALqJfhEHnn59_VR_vJmQKAdIN9gf_RhWW26n8hoWg37BfqTY&usqp=CAU" alt />
                <figcaption><h3>FLASHMOB</h3><p>Put your hands up. Everybody just dance up. We came to party rock</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://i.ytimg.com/vi/xHnJkizo6m8/maxresdefault.jpg" alt />
                <figcaption><h3>LOVE PROPOSAL</h3><p>It's enough for me to be sure that you and I exist at this moment.</p></figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xh3-2vCX8z6aoy9yVyX_t4tO4Zyc3H9xGw&usqp=CAU" alt />
                <figcaption><h3>BABY SHOWER</h3><p>Your family is about to get even cuter</p></figcaption>
              </figure>
            </li>
            <li>
             
            </li>
            <li>
              <figure>
                <img src="http://wowthemes.net/demo/leroy/img/dummies/17.jpg" alt />
                <figcaption><h3>CONFERENCE</h3><p>Be so good they can’t ignore you</p></figcaption>
              </figure></li>
          </ul>
          <nav>
            <span className="icon nav-prev" />
            <span className="icon nav-next" />
            <span className="icon nav-close" />
          </nav>
          <div className="info-keys icon">Navigate with arrow keys</div>
        </section>
      </div>
      <section className="feedback" id="feedback">
        <div className="container w960">
          <div className="heading">
            <img className="dividerline" />
            <h2><br></br>Reviews and Ratings</h2>
            <img className="dividerline" />
          </div>
          <div className="row">
            <blockquote>AHAD has streamlined our processes. I’m loving the itinerary and budget tools the most! And your customer service has been fabulous.<cite>Shyam,Chennai<br /><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></cite> </blockquote>
            <blockquote>AHAD is a fantastic site and tool for planners. I love the event budget tool and having all my event info in one place. Being a corporate planner, I like how I can set it up for a more business and corporate look but social and wedding planners can also give it a more social look. Keep doing what you are doing.<cite>Aakash,Salem<br /><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></cite> </blockquote>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading">
            <img className="dividerline"  />
            <h2>Contact Us</h2>
            <img className="dividerline"  />
          </div>
        </div>
        <div className="container w960">
          <div className="row">
            <div className="done">
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">×</button>
                Your message has been sent. Thank you!
              </div>
            </div>
            <form method="post" action="contact.php" id="contactform">
              <input name="name" type="text" className="contact col-md-6" placeholder="Your Name *" />
              <input name="email" type="email" className="contact noMarr col-md-6" placeholder="E-mail address *" />
              <input name="comment" type="text" className="contact col-md-12" placeholder="Message *" />
              <input type="submit" id="submit" className="contact submit" defaultValue="Send message" />
            </form>
          </div>
        </div>
      </section>
      
    </div>
  </section></div>

</>
    )
}

export default Homepage;