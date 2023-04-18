<template>
    <el-card class="box-card mb-4">
        <div slot="header" class="clearfix">
            <p class="text-2xl font-bold">Demo Page</p>
        </div>
        <br>
        <div>
            <p class="text-lg font-medium" style="margin: 3px">Model</p>
            <el-select v-model="selectedModelId">
                <el-option
                        v-for="item in models"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <div class="bg-gray-100 text-sm rounded-lg border-1 border-gray-200"
                 style="padding: 16px; border-radius: 0 0 5px 5px; margin-bottom: 20px">
                {{ models[selectedModelId - 1].description }}
            </div>
        </div>
    </el-card>

    <el-card>
        <el-tabs color="#14b8a6" v-model="selectedTab" @tab-click="handleClick">
            <el-tab-pane label="Demo" name="Demo">
                <p class="text-lg font-medium" style="margin: 3px">Example Input</p>
                <el-upload
                        drag
                        action="http://localhost:8080/modeldemo/oss/upload"
                        method="post"
                        multiple
                        :on-success="uploadSuccess"
                >
                    <el-icon class="el-icon--upload">
                        <upload-filled/>
                    </el-icon>
                    <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                    </div>
                    <!--                    <template #tip>-->
                    <!--                        <div class="el-upload__tip">-->
                    <!--                            jpg/png files with a size less than 500kb-->
                    <!--                        </div>-->
                    <!--                    </template>-->
                </el-upload>

                <p class="text-lg font-medium" style="margin: 3px">Example Output</p>
                <el-input
                        v-model="textarea"
                        :rows="4"
                        type="textarea"
                        placeholder=""
                />
                <el-button color="#14b8a6" class="mt-3" plain @click="runModel">Run Model</el-button>
            </el-tab-pane>
            <el-tab-pane label="Model Card" name="Model Card">Model Card</el-tab-pane>
            <el-tab-pane label="Model Usage" name="Model Usage">Model Usage</el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
import {UploadFilled} from "@element-plus/icons-vue";
import api from "@/api/index";

export default {
    name: "modelpage",
    components: {UploadFilled},
    data() {
        return {
            selectedModelId: 1,
            selectedTab: 'Demo',
            textarea: '',
            imageUrl: null,
            models: [
                {
                    id: 1,
                    name: 'VGG16',
                    description: 'VGG16 Description'
                },
                {
                    id: 2,
                    name: 'VGG19',
                    description: 'VGG19 Description'
                },
                {
                    id: 3,
                    name: 'GOOGLENET-V1',
                    description: 'GOOGLENET-V1 Description'
                },
                {
                    id: 4,
                    name: 'GOOGLENET-V3',
                    description: 'GOOGLENET-V3 Description'
                }
            ],
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            console.log(this.selectedTab)
        },
        runModel() {
            console.log('model: ' + this.models[this.selectedModelId - 1].name)
            console.log('imageUrl: ' + this.imageUrl)
            console.log('run Model')
            api.vggdemo(this.imageUrl, this.models[this.selectedModelId - 1].name).then(res => {
                console.log(res.data)
                this.textarea = res.data[0]
            })
        },
        uploadSuccess(response, file, fileList) {
            // console.log(response, file, fileList);
            console.log(response)
            this.imageUrl = response
            console.log('imageUrl: ' + this.imageUrl)
        }
    }
}

</script>

<style>
.el-select {
    width: 100%;
}

.el-tabs__item.is-active {
    color: #14b8a6;
}


</style>