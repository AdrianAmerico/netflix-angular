import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input()
  title!: any;

  @ViewChild('trailer', { static: false })
  trailer!: ElementRef<HTMLVideoElement>;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }
  public playVideo(): void {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.play();
  }

  public stopVideo(): void {
    this.trailer.nativeElement.pause();
  }

  public getMuted(): boolean {
    console.log('ué', this.trailer);
    return this.trailer.nativeElement.muted;
  }

  public toggleSound(): void {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}
