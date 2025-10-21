import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, firstValueFrom} from 'rxjs';

type Photo = {
  id: number,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string,
  liked: boolean,
}

@Component({
  selector: 'app-photo-gallery',
  imports: [],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.scss'
})
export  class PhotoGallery implements OnInit {

  private http = inject(HttpClient);

  photos = signal<Photo[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  likeUser = signal(false);

  ngOnInit(): void {
    this.loadPhotos();
  }

  async loadPhotos(){
    try {
      this.isLoading.set(true);
      this.error.set(null)

      const photos = await firstValueFrom(
        this.http.get<Photo[]>('https://picsum.photos/v2/list?page=1&limit=20').pipe(delay(2000))
      );

      this.photos.set(photos);
    } catch (err) {
      this.error.set('Erreur lors du chargement des photos');
      console.error('Errur API:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  async refresh() {
    await this.loadPhotos();
  }

  likeMessage (photo: Photo) :string {
    const liked = photo.liked;
    if (liked) return "Vous aimez déjà cette photo";
    return "Vous n'aimez pas encore cette photo";

  };

  like(photo: Photo): void {
    photo.liked = true;

  }

  unlike(photo: Photo): void {
    photo.liked = false;

  }
}


