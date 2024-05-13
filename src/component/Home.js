import React from 'react';
import axios from 'axios';
import lmslogo from '../images/lmslogo.jpg';


class Home extends React.Component {
    state = {
        testData: [],
        error: null
    };


    // componentDidMount() {
    //     this.getUser();
    // }


    // async getUser() {
    //     try {
    //         const response = await axios.get('http://localhost:8100/LMS/api/displayData');
    //         this.setState({ testData: response.data.data, error: null });
    //         console.log(response.data.data);
    //     } catch (error) {
    //         this.setState({ error: error.message });
    //     }
    // }


    render() {
        const { testData, error } = this.state;
        return (
            <div>
                {/* {error && <div>Error: {error}</div>}
               {testData.length > 0 ? (
                   <div>
                       {testData.map((data, index) => (
                           <div key={index} className="data-item">
                               <p>First Name: {data.firstName}</p>
                               <p>Last Name: {data.lastName}</p>
                               <p>Email: {data.email}</p>
                               <p>Contact Number: {data.contact}</p>
                               <p>Area: {data.area}</p>
                               <p>Country: {data.country}</p>
                               <p>State: {data.state}</p>
                               <p>City: {data.city}</p>
                               <p>Zipcode: {data.zipcode}</p>
                               <p>Profile Picture:
                       <img className="w-full h-96 mt-16" src={data.profilePicture} alt="Login" />
                               </p>
                           </div>
                       ))}
                   </div>
               ) : (
                       <div>No data available</div>
                   )} */}
                <div className="flex justify-center items-center">
                    <div className="text-5xl font-extrabold w-1/2 mb-36 px-2">
                        The learning software <br />
                        that trainers and <br />
                        learners love
                        <p className="text-xl font-extrabold mt-5 text-white px-2">
                            Train your employees, partners, and customers <br />
                            online on a feature-rich LMS that’s so easy to use, <br /> you’ll be up and running in
                            minutes.
                        </p>
                    </div>


                    <div className="justify-end w-1/2 h-full px-3 py-3">
                        <img className="w-full h-96 mt-16" src={lmslogo} alt="Login" />
                    </div>
                </div>
            </div>
        );
    }

    /*
    Controller
    @CrossOrigin
    @RestController
    
    @RequestMapping(value = "/api")
    
    public class LMSController {
        
        @Autowired
        LMSServiceIMPL service;
    
        @RequestMapping(value = "/test", method = RequestMethod.GET)
        public ResponseEntity test() throws Exception {
            return new ResponseEntity("Hello World1!", HttpStatus.OK);
        }
    
        @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity getUserData(@RequestBody LMSFormBean lMSFormBean) throws Exception {
            Map map = service.getUserData(lMSFormBean);
            return new ResponseEntity(map, HttpStatus.OK);
        }
    
        
        ServiceImpl
        @Service
    public class LMSServiceIMPL implements LMSServiceInterface {
    
        @Autowired
        LMSRepositoryInterface lMSRepositoryInterface;
    
        Map dataMap = new HashMap();
    
        @Override
        public Map getUserData(LMSFormBean lMSFormBean) {
            Map map = new HashMap();
            map.put("displayMessage", "");
            map.put("data", dataMap);
            map.put("isSuccess", false);
    
            if (lMSFormBean.getEmail() == null || lMSFormBean.getEmail().isEmpty()) {
                map.put("displayMessage", "Please enter Email!");
            } else if (lMSFormBean.getPassword() == null || lMSFormBean.getPassword().isEmpty()) {
                map.put("displayMessage", "Please enter Password!");
            } else {
    //            map.put("displayMessage", "Login Succsessfully!");
    //            map.put("data", "hello");
    //            System.out.println("1 password is:- " + formBean.getPassword());
                map.put("data", lMSRepositoryInterface.getUserData(lMSFormBean));
                map.put("isSuccess", true);
            }
            return map;
        }
    
        public interface LMSRepositoryInterface {

    public int getUserData(LMSFormBean lMSFormBean);



package com.nic.LMSRepository;

import com.nic.DatabaseConnection.LMSSqlUitility;
import com.nic.LMSFormBean.LMSFormBean;
import java.util.List;
import java.util.Map;
import java.sql.SQLException;
import org.springframework.stereotype.Repository;


@Repository
public class LMSRepositoryIMPL implements LMSRepositoryInterface {

    LMSSqlUitility sql = new LMSSqlUitility();

    @Override
    public int getUserData(LMSFormBean lMSFormBean) {
        if (lMSFormBean.getEmail().equals("admin@gmail.com") && lMSFormBean.getPassword().equals("admin")) {
            return 1;
        } else {
            return 0;
        }
    }

    @Override
    public List loginUser(LMSFormBean lMSFormBean) throws SQLException {
        StringBuilder sb = new StringBuilder("SELECT email, password FROM LMSUser");
        sb.append(" WHERE email = ? AND password = ?");
        // Create an array to hold the parameters
        Object[] params = {lMSFormBean.getEmail(), lMSFormBean.getPassword()};
        return sql.getDataWithParams(sb.toString(), params);
    }

    @Override
    public List loginAdmin(LMSFormBean lMSFormBean) throws SQLException {
        StringBuilder sb = new StringBuilder("SELECT email, password FROM LMSAdmin");
        sb.append(" WHERE email = ? AND password = ?");
        // Create an array to hold the parameters
        Object[] params = {lMSFormBean.getEmail(), lMSFormBean.getPassword()};
        return sql.getDataWithParams(sb.toString(), params);
    }

    @Override
    public int registerUserData(LMSFormBean lMSFormBean) throws SQLException {
        StringBuilder query = new StringBuilder("insert into LMSUser");
        query.append(" (firstName,lastName,email,contact,area,country,state,city,zipcode,profilePicture,password)");
        query.append(" values ('").append(lMSFormBean.getFirstName()).append("',");
        query.append("'").append(lMSFormBean.getLastName()).append("',");
        query.append("'").append(lMSFormBean.getEmail()).append("',");
        query.append("'").append(lMSFormBean.getContact()).append("',");
        query.append("'").append(lMSFormBean.getArea()).append("',");
        query.append("'").append(lMSFormBean.getCountry()).append("',");
        query.append("'").append(lMSFormBean.getState()).append("',");
        query.append("'").append(lMSFormBean.getCity()).append("',");
        query.append("'").append(lMSFormBean.getZipcode()).append("',");
        query.append("'").append(lMSFormBean.getProfilePicture()).append("',");
        query.append("'").append(lMSFormBean.getPassword()).append("');");
        return sql.registerUserData(query.toString());
    }

    @Override
    public int addCourse(LMSFormBean lMSFormBean) throws SQLException {
        StringBuilder query = new StringBuilder("insert into LMSCourses");
        query.append(" (name,description,image,rating,price)");
        query.append(" values ('").append(lMSFormBean.getName()).append("',");
        query.append("'").append(lMSFormBean.getDescription()).append("',");
        query.append("'").append(lMSFormBean.getImage()).append("',");
        query.append("'").append(lMSFormBean.getRating()).append("',");
        query.append("'").append(lMSFormBean.getPrice()).append("');");
        return sql.registerUserData(query.toString());
    }

    @Override
    public List<Map<String, Object>> displayUserData() throws SQLException {
        StringBuilder displayUser = new StringBuilder("SELECT * FROM LMSUser;");
        return sql.getData(displayUser.toString());
    }

    @Override
    public List<Map<String, Object>> coursesData() throws SQLException {
        StringBuilder coursesData = new StringBuilder("SELECT * FROM LMSCourses;");
        return sql.getData(coursesData.toString());
    }

}



package com.nic.DatabaseConnection;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class LMSSqlUitility {

    LMSDatabaseConfig lMSDatabaseConfig = new LMSDatabaseConfig();
    JdbcTemplate jdbc = new JdbcTemplate(lMSDatabaseConfig.datasource());

    public List getData(String query) {
        return jdbc.queryForList(query);
    }

    public int registerUserData(String query) {
        return jdbc.update(query);
    }
    
    public List getDataWithParams(String query, Object[] params) {
        return jdbc.queryForList(query, params);
    }
}


package com.nic.DatabaseConnection;

import com.mysql.cj.jdbc.MysqlDataSource;
import javax.sql.DataSource;


public class LMSDatabaseConfig {

    public DataSource datasource() {
        MysqlDataSource datasource = new MysqlDataSource();
        datasource.setServerName("localhost");
        datasource.setPort(3306);
        datasource.setDatabaseName("LMS");
        datasource.setUser("root");
        datasource.setPassword("adirp7");
        return datasource;
    }
}

        */
}


export default Home;
