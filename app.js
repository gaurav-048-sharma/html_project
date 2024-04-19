// let url = fetch("https://docs.potterdb.com");
// let url2 = fetch('https://jsonplaceholder.typicode.com/posts/1')

// url.then(response => response.json())
// url.then(data => {
//     console.log(data);
// });
// url.catch(error => {
//     console.error(error);
// })


function func() {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
         .then(data => {
            console.log(data);
          })
         .catch(error => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error('An error occurred:', error);
      }
  }

  func();