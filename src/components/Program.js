import React from "react";
import "../components/program.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
export default function Program() {


  return (
    <div className="program-page">
      <div className="header-pic">
        <div className="header">
          <h2>
            Programs <span> at</span> PKFokam
          </h2>
        </div>
      </div>

      <div className="graduate-program">
        <div className="container">
          <h3>Graduate Programs</h3>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card className="mba">
                <CardHeader
                  className="card-header"
                  title=" (MBA)Master of Business Administration"
                />
                <CardContent className="description-program">

                <p> Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                </p>
                  <Button className="see-more"><a href="ComputerScience">Learn More</a></Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="msse">
                <CardHeader
                  className="card-header"
                  title=" MSSE(Master of Science in Software Engineering)"
                />
                <CardContent className="description-program">
               <p>  Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
               </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="undergraduate-program">
        <div className="container">
          <h3>Undergraduate Programs</h3>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card className="computer-science">
                <CardHeader
                  className="card-header"
                  title=" Bachelor of Science in Computer Science"
                />
                <CardContent className="description-program">
                <p>  Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="information-technology">
                <CardHeader
                  className="card-header"
                  title=" Bachelor of Science in Information Technology"
                />
                <CardContent className="description-program">
                 <p>
                   Information Technology(IT), as an academic discipline, focuses on meeting the needs of users with an organization
                   and societal context through selection, creation, application, integration and administration of computing technologies.
                   To succinctly put: IT is using technology and to apply information to meet business needs.
                 </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="electrical-tech">
                <CardHeader
                  className="card-header"
                  title="Bachelor of Technology in Electrical Engineering Technology"
                />
                <CardContent className="description-program">
                <p>  Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="telecom">
                <CardHeader
                  className="card-header"
                  title=" Bachelor of Technology in
            Telecommunication Engineering Technology"
                />
                <CardContent className="description-program">
                 <p> Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                 </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className="mechanical">
                <CardHeader
                  className="card-header"
                  title="Bachelor of Technology in Mechanical Engineering"
                />
                <CardContent className="description-program">
                  <p>  Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                    </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="economics">
                <CardHeader
                  className="card-header"
                  title="Bachelor of Administration in Economics"
                />
                <CardContent className="description-program">
                <p>  Our program, Master of Science in Software Engineering, is a
                  research-based and project-based program that prepares you to
                  produce innovative projects. You will design and develop
                  systems individually and in a group, to bring solutions to
                  society, businesses and industries.
                </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="professional-training">
        <div className="container">
          <h3>Professional Programs</h3>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card className="bea">
                <CardHeader
                  className="card-header"
                  title="Business Excellence Academy"
                />
                <CardContent className="description-program">
                  <p> As a specialised department of the Business School, the Business Excellence Academy (BEA) of PKFokam Institute of Excellence offers professional training modules with certifications. It also offers professional training to holders of Higher Education certificates seeking for jobs.
                  </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="cisco">
                <CardHeader
                  className="card-header"
                  title="CISCO"
                />
                <CardContent className="description-program">
                 <p> The CCNA Routing and Switching fast-track program consists of Four (4) modules for 6 months, it includes activities using packet tracer, hands-on laboratory works, and a wide array of assessment types and tools. 


                   
                  </p>
                  <Button className="see-more">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
