import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    blog: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/blogs', () => {
      return this.schema.all('blog');
    });

    this.get('blogs/:id', (schema, request) => {
      const id = request.params.id;

      return schema.blogs.find(id);
    });
    this.delete('blogs/:id', (schema, request) => {
      const id = request.params.id;
      return schema.blogs.find(id).destroy();
    });
    this.post('/blogs', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.db.blogs.insert(data);
    });
  },
  seeds(server) {
    server.db.loadData({
      blogs: [
        {
          id: 1,
          title: 'How to Build creative ReadME for your Github Profile',
          body: 'If you regularly use Github and watch others profile, you might have noticed, that some people have some Attractive stats, tools logos in their profiles. So through this post, I am going to share some cool stuff for your Github profile with you. So basically this is easy but you probably would not find it on your own. for this you need to create a simple Github repository. Name the repository with your Github username like in my case :...continues in https://codewithgauri.tech/how-to-build-creative-readme-for-your-github-profile',
          author: 'Gaurav Pandey',
        },
        {
          id: 2,
          title: 'Learn in 1 Hour: Design Patterns',
          body: 'Today marks the last day of Hour of Code at JetBrains Academy! We want to end it on a high note with a topic about design patterns – they are going to make your programming experience much easier, whether you are an experienced developer or you’ve just started learning. Let’s take a closer look at what they are.\n          Design patterns are reusable templates for commonly occurring problems in software design. They are not as straightforward as code snippets that can be directly transferred to the program. Instead, they present a generalized strategy that developers can apply to solve issues when designing software. The goal of design patterns is to speed up the development process, so it is quite important to learn about commonly used program structures and problems that can arise during the design process.          Creational design patterns focus on object creation. Using them allows developers to implement a well-known solution instead of reinventing it from the ground up. At JetBrains Academy, you can get an introduction to design patterns and learn five types of the most common creational patterns in just 1 hour. Click the links below to open the educational topics that will allow you to not only read a detailed theory about a specific design pattern but also apply your skills straight to practice:              \n\n🕐 Factory method is a pattern that creates an interface or abstract class that also allows for modification of object creation in subclasses. It is best used when the developer doesn’t know beforehand the exact types and dependencies of the objects the code should work with.               \n\n🕐 Singleton is a pattern that creates only one instance of an object while providing a point of global access to this instance. This pattern should be implemented when a class in the program has only a single instance available to all clients.                 \n🕐 Prototype is a pattern based on the concept of copying an existing object for creating a new one. It is used to reduce the number of subclasses that differ only in the way they initialize their objects.                \n🕐 Builder is a pattern that lets developers design complex objects by using simple objects via a step-by-step approach. This allows creating different modified variations of the same object.                \n🕐 Abstract factory is a pattern that produces sets of related objects. In its simplest form, it could be a set of factories that allows developers to produce parts of object sets.              We want to say thank you for learning with us during this week! Did you enjoy exploring the world of programming with the Hour of Code? If so, share a story about something interesting, challenging, or fun you’ve done at JetBrains Academy in 1 hour and get a chance to win a 25% discount on your personal subscription at JetBrains Academy. Learn more about the rules in the Hour of Code at JetBrains Academy blog post.                 Happy Hour of Code!        Your JetBrains Academy team source: https://blog.jetbrains.com/education/2021/12/12/learn-in-1-hour-design-patterns/',
          author: 'Anastasia Khramushina',
        },
        {
          id: 3,
          title: '5 Best Side Projects to Build as a Beginner',
          body: 'Do you feel that your learning has stagnated as a code newbie? Do you need some beginner-friendly project ideas to improve your skills?  Many of you have asked me for some side project ideas as a beginner. And no, I dont suggest the usual to-do or weather apps. In this article, let me share my top 5 best side projects to build as a beginner. Hopefully, this can help you get started on many more wonderful projects you will build in your coding journey. source: https://lo-victoria.com/5-best-side-projects-to-build-as-a-beginner',
          author: 'Victoria Lo',
        },
      ],
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
