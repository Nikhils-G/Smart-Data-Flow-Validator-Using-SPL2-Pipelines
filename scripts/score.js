            const progressCircle = document.querySelector('.score-circle-progress');
            const scoreValue = document.querySelector('.score-value');
            
            // Animate the circle on load
            setTimeout(() => {
                progressCircle.style.strokeDashoffset = '132'; // 70% of 440 (100%)
                
                // Score pulse animation
                let pulseCount = 0;
                const pulseInterval = setInterval(() => {
                    scoreValue.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    scoreValue.style.textShadow = '0 0 15px rgba(0, 240, 255, 0.7)';
                    setTimeout(() => {
                        scoreValue.style.transform = 'translate(-50%, -50%) scale(1)';
                        scoreValue.style.textShadow = '0 0 10px rgba(0, 240, 255, 0.3)';
                    }, 300);
                    
                    pulseCount++;
                    if(pulseCount >= 3) clearInterval(pulseInterval);
                }, 1500);
            }, 800);
            
            // Interactive time filter
            const timeFilter = document.getElementById('timeRange');
            timeFilter.addEventListener('change', function() {
                // Simulate data loading
                document.querySelectorAll('.card').forEach(card => {
                    card.style.opacity = '0.7';
                    card.style.transform = 'translateY(10px)';
                });
                
                setTimeout(() => {
                    document.querySelectorAll('.card').forEach(card => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                }, 800);
            });
            
            // Refresh button animation
            const refreshBtn = document.querySelector('.refresh-btn');
            refreshBtn.addEventListener('click', function() {
                // Rotate icon
                const icon = this.querySelector('i');
                icon.style.transform = 'rotate(360deg)';
                icon.style.transition = 'transform 0.5s ease-in-out';
                
                // Change text
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ANALYZING';
                
                setTimeout(() => {
                    icon.style.transform = 'rotate(0)';
                    this.innerHTML = originalText;
                    
                    // Trigger card animations
                    document.querySelectorAll('.card').forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'translateY(-10px)';
                            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
                            setTimeout(() => {
                                card.style.transform = 'translateY(0)';
                                card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                            }, 300);
                        }, index * 100);
                    });
                }, 2000);
            });
            
            // Alert button animation
            const alertBtn = document.querySelector('.alert-btn');
            alertBtn.addEventListener('click', function() {
                this.style.boxShadow = '0 0 20px rgba(255, 56, 96, 0.5)';
                setTimeout(() => {
                    this.style.boxShadow = 'none';
                }, 500);
            });
            
                       
            // Animate level bars on scroll into view
            const levelBars = document.querySelectorAll('.level-bar');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const targetWidth = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100);
                    }
                });
            }, { threshold: 0.5 });
            
            levelBars.forEach(bar => {
                observer.observe(bar);
            });
        });
