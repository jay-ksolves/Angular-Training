import { Component } from '@angular/core';
import { PipeShortNamePipe } from '../pipe/pipe-short-name-pipe';
import { CovertpipePipe } from '../pipe/covertpipe-pipe';
import { TruncatelongtextPipe } from '../pipe/truncatelongtext-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custompipe',
  imports: [PipeShortNamePipe, CovertpipePipe, TruncatelongtextPipe, CommonModule],
  templateUrl: './custompipe.html',
  styleUrl: './custompipe.css',
})

export class Custompipe {
  fullName = "jay prakash";
  usd = 5;
  rate = 100;
  longsentence = "we use pipes in angular to transform the data";
}
