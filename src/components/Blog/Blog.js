import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto mt-5'>
            <div>
                <h1 className='text-2xl'>1. What is cors?</h1>
                <p>CORS or Cross-Origin Resource Sharing in Node.js is a mechanism by which a front-end client can make requests for resources to an external back-end server. The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>In the present era, user authentication is one of the most important requirements for Android apps. It is essential to authenticate users, and it is much harder if we have to write all this code on our own. This is done very easily with the help of Firebase.
                    The benefits of using firebase are:
                    1. Being able to authenticate our users securely, it offers a customized experience to them based on their interests and preferences.
                    2. We can ensure that they have no problems accessing their private data while using our app from multiple devices.
                    3. Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use.
                    4. Firebase Authentication also provides some user interface libraries which enable screens for us when we are logging it.
                    5. Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl'>3. How does the private route work?</h1>
                <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl'>4. What is Node? How does Node work?</h1>
                <p>Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code.
                    Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.
                    Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.
                    A Node application runs in a single process. Node does not create a new thread for every request, as is often the case with traditional server-side programs.
                    In this way, a Node server can handle thousands of concurrent connections without having to contend with thread concurrency issues or the overhead multithreading brings.
                    Node.js is event-driven and runs asynchronously. Code written for the Node environment does not follow the traditional model of receive, process, send, wait and receive found in other systems.
                    Instead, Node implements an event loop that processes incoming requests as they stack up in the event queue, handling small requests one after the other without waiting for responses.</p>
            </div>
        </div>
    );
};

export default Blog;