import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPictures } from './Api/getPictures';

export class App extends Component {
  state = {
    searchValue: '',
    photos: [],
    page: 1,
  };

  // componentDidUpdate(_, prevState) {
  //   const { searchValue, page } = this.state;

  //   if (prevState.searchValue !== searchValue || prevState.page !== page) {
  //     getPictures(searchValue, page)
  //       .then(data => {
  //         if (!data.totalHits) {
  //           alert(`${searchValue} not found.`);
  //           return;
  //         }
  //         this.setState(prevState => ({
  //           photos: [...prevState.photos, ...data.hits],
  //         }));
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    if (searchValue !== prevState.searchValue || page !== prevState.page) {
      getPictures(searchValue, page)
        .then(data => {
          if (!data.totalHits) {
            alert(`"${searchValue}" not found. Please enter something else.`);
            return;
          }

          this.setState(prev => ({ photos: [...prev.photos, ...data.hits] }));
        })
        .catch(error => {
          console.log(error);
        });
      // .finally(() => {
      //   this.setState({ isLoader: false });
      // });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(e.target[1].value);
    this.setState({ searchValue: e.target[1].value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery photos={this.state.photos} />
      </>
    );
  }
}
