import React from 'react'
import axios from 'axios'
import { sheetsToArray } from '../Utils/sheetsDB'

const AppContext = React.createContext()

const idSpreadSheet = `1flaobRnapU9AouMptxcpCw9QEmGl-PjDRXSbZc4FOm4`
const navbarData = `https://spreadsheets.google.com/feeds/list/${idSpreadSheet}/1/public/values?alt=json`;
const blogData = `https://spreadsheets.google.com/feeds/list/${idSpreadSheet}/2/public/values?alt=json`;
const skillsData = `https://spreadsheets.google.com/feeds/list/${idSpreadSheet}/3/public/values?alt=json`;

class AppProvider extends React.Component {
  state = {
    navbarItem: [],
    blog: [],
    skills: [],
  }

  constructor() {
    super()
    this.getNavBar = this.getNavBar.bind(this)
    this.findBlogName = this.findBlogName.bind(this)
    this.getBlog = this.getBlog.bind(this)
    this.getSkills = this.getSkills.bind(this)
  }

  componentDidMount() {
    this.getNavBar()
    this.getBlog()
    this.getSkills()
  }

  getNavBar = () => {
    axios
      .get(navbarData)
      .then(navbar => {
        let data = sheetsToArray(navbar.data.feed.entry)
        this.setState({
          navbarItem: data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  getBlog = () => {
    axios
      .get(blogData)
      .then(blog => {
        let data = sheetsToArray(blog.data.feed.entry)
        this.setState({
          blog: data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  getSkills = () => {
    axios
      .get(skillsData)
      .then(skills => {
        let data = sheetsToArray(skills.data.feed.entry)
        this.setState({
          skills: data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  findBlogName = (name) => {
    let blog = this.state.blog.find(function (e) {
      return e.name === name;
    });
    return this.setState({
      selectedBlog: blog
    })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          navbarItem: this.state.navbarItem,
          blog : this.state.blog,
          skills : this.state.skills
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }

}

const AppConsumer = AppContext.Consumer

export { AppProvider, AppConsumer }