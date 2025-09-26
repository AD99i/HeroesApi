import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SuperheroApi } from '../../services/superhero-api';
import { Superhero } from '../../models/superhero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private superheroApi = inject(SuperheroApi);

  hero = signal<Superhero | null>(null);
  loading = signal<boolean>(true);

  ngOnInit() {
    const heroId = this.route.snapshot.params['id'];
    if (heroId) {
      this.loadHero(+heroId);
    }
  }

  private loadHero(id: number) {
    this.superheroApi.getHero(id).subscribe({
      next: (hero) => {
        this.hero.set(hero);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Erreur lors du chargement du héros:', error);
        this.hero.set(null);
        this.loading.set(false);
      }
    });
  }

  getOverallRating(): number {
    const hero = this.hero();
    if (!hero) return 0;

    const stats = hero.powerstats;
    const total = stats.intelligence + stats.strength + stats.speed +
                  stats.durability + stats.power + stats.combat;
    return Math.round(total / 6);
  }
}