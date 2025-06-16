<template>
  <transition name="fade-slide">
    <div v-if="visible" class="modal">
        <div class="modal-header">
        <h2 class="title">Ethiopia</h2>
        <button class="close-button" @click="$emit('close')">×</button>
        </div>

        <div class="static-header">
        <h1>Sponsorships for children in Ethiopia</h1>
        </div>

        <div class="scrollable-content">
            <img :src="modalImage" alt="" class="section-image" />

            <div class="intro-text">
                With one Sponsorship you can help children in Ethiopia through investments in educational opportunities.
                Your help also aids in building wells, latrines and sanitation facilities, and diseases protection.
                Expectant mothers and toddlers are medically cared for. Poor families receive aid and nutrition is supported.
                This creates a beneficial environment for whole communities!
                <br /><br />
                An Ethiopian child benefits from their sponsorship, which enables them to attend school.
            </div>

            <div class="section" v-for="(section, index) in sections" :key="index">
                <div class="section-header">
                <div class="section-title">{{ section.title }}</div>
                </div>
                <div class="section-content">{{ section.content }}</div>
                <img :src="section.image" alt="" class="section-content-image" />
            </div>

            <div class="video-container">
                <iframe
                    class="video-embed"
                    src="https://www.youtube.com/embed/C3tKCzOrde8?start=5"
                    title="Ethiopia Sponsorship Video"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import img1 from '@/assets/img/ethiopia-1.png';
    import img2 from '@/assets/img/ethiopia-2.png';
    import img3 from '@/assets/img/ethiopia-3.png';
    import img4 from '@/assets/img/ethiopia-4.png';

    export default {
    name: 'EthiopiaSponsorship',
    props: {
        visible: {
        type: Boolean,
        required: true
        }
    },
    data() {
        return {
        modalImage: img1,
        sections: [
            {
            title: '1 Child',
            content: `Your sponsorship primarily supports the basic needs of a child in Ethiopia.
            It is tailored to the needs of the sponsored child and improves nutrition, access to drinking water and medical care, as well as schooling.`,
            image: img2,
            },
            {
            title: '2 Family',
            content: `The family of the sponsored child in Ethiopia benefits in three ways: through the support of their child,
            through the support of the project community, and through learning how to lead an independent life.
            This includes training on income generation or parenting skills.`,
            image: img3,
            },
            {
            title: '3 Project Community',
            content: `With your sponsorship contributions, you also support the entire project community in Ethiopia.
            For example, through the construction of new wells or with agricultural training.
            This allows the communities to gradually become independent of financial aid.
            Not only the child benefits from the sponsorship, but the entire village community.`,
            image: img4,
            },
        ]
        };
    },
    methods: {
        close() {
        this.$emit('update:visible', false); // This emits to the parent component to hide the modal.
        }
    }
    };
    </script>

    <style scoped>
    .modal {
    position: fixed;
    top: 10%;
    left: 10%;
    right: 10%;
    background: #fff;
    padding: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 100;
    max-height: 80vh;
    overflow: hidden;
    }

    body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
    }

    .container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    }

    .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .modal-header h1 {
    color: #008045;
    margin-top: 5px;
    }

    .modal-header h2 {
    color: #008045;
    font-size: 1.5rem;
    }

    .modal-header h3 {
    color: #008045;
    }

    .title {
    color: #008045;
    font-size: 2rem;
    margin-top: 0px;
    }

    .close-button {
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    }

    .static-header {
    padding-left: 5px;
    color: #008045;
    font-weight: bold;
    font-size: 18px;
    }

    .scrollable-content {
    height: 400px;
    overflow-y: auto;
    padding: 20px;
    background: white;
    bottom: 5px;;
    }

    .section-image
    {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
    }

    .section-content-image {
    width: 30%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
    }

    .section-content-image {
    margin-top: 5px;
    }

    .intro-text {
    line-height: 1.6;
    color: #333;
    margin-bottom: 30px;
    font-size: 16px;
    }

    .section {
    margin-bottom: 10px;
    border-radius: 8px;
    }

    .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    }

    .section-title {
    font-size: 20px;
    font-weight: bold;
    color: #008045;
    }

    .section-content {
    line-height: 1.6;
    color: #555;
    font-size: 15px;
    }

    .video-container {
    margin-top: 30px;
    text-align: center;
    }

    .video-embed {
    width: 100%;
    min-height: 260px;
    max-height: 260px;
    width: 100%;
    height: 315px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Custom Scrollbar */
    .scrollable-content::-webkit-scrollbar {
    width: 8px;
    }
    .scrollable-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    }
    .scrollable-content::-webkit-scrollbar-thumb {
    background: #008045;
    border-radius: 4px;
    }
    .scrollable-content::-webkit-scrollbar-thumb:hover {
    background: #006535;
    }
    .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background-color: #008045;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;
    }
</style>
